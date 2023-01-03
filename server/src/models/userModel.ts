import { UserData, UserLoginData, GrantedPermissions } from '../types/user'
import pools from '../db'
const { caffeine } = pools

export const createUser = async (user: UserData) => {
    try {
        const { name, gender, birthdate, email, role_id, company_id } = user
        const queryStr: string = `
        INSERT INTO adm.user 
        (name,gender, birthdate, email, role_id, company_id) 
        values( '${name}', '${gender}', '${birthdate}', '${email}', ${role_id}, ${company_id})
        RETURNING user_id, email
    `
        console.log(queryStr)
        const client = await caffeine
            .query(queryStr)
            .then(async function (results) {
                const client = results.rows[0]
                const queryString: string = `
                INSERT INTO adm.user_account
                (user_id, username, passhash)
                values(${client.user_id}, '${client.email}', '$2a$10$2wES/Po.tNREMi/dxbc7Rud2RZtkoEXi42/89Veo6/zSHa4caXbJ2')
                returning user_account_id'
                `
                console.log(queryStr)
                return client
            })
    } catch (err) {
        console.log(err)
        throw new Error()
    }
}

export const listAllUsers = async () => {
    try {
        const queryStr: string = `
        SELECT u.*,d.department_description, dr.role_description ,c.name as company from adm.user u
        INNER JOIN adm.department_role dr ON dr.department_role_id = u.role_id
        INNER JOIN adm.department d ON d.department_id = dr.department_id
        INNER JOIN adm.company c ON c.company_id = u.company_id
        `
        const client = await caffeine.query(queryStr)
        if (client.rowCount > 0) {
            return { message: 'success', data: client.rows }
        } else {
            return { message: 'success', data: [] }
        }
    } catch (err) {
        console.log(err)
        return { message: 'Internal Server Error', code: 30, data: [] }
    }
}
