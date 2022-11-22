import pools from '../db'

const { caffeine } = pools
export const getUserByUsername = async function (username: string) {
    const userApp = await caffeine.query(
        `SELECT * FROM adm.user_login_data ud WHERE ud.username='${username}'`
    )
    return userApp.rows
}

export const getUserData = async function (username: string) {
    const client = await caffeine.query(
        `
        SELECT u.user_id, u.name, u.gender, u.birthdate, u.role_id, ud.username
        FROM adm.user_login_data ud 
        INNER JOIN adm.user u ON u.user_id = ud.user_id
        WHERE ud.username='${username}'
        `
    )
    return client.rows
}
