import bcrypt from 'bcrypt'
import { reset } from 'nodemon'
import { UserData, GrantedPermissions, UserLoginData } from '../types/user'
import { createUser, listAllUsers } from '../models/userModel'

export const insertUser = async function (userData: UserData) {
    try {
        const insertedUser = await createUser(userData).then((res) => {
            console.log(res)
        })
    } catch (err) {
        throw new Error()
    }
}

export const listUsers = async function (empresa_id: number) {
    try {
        if (empresa_id == 0) {
            const listedUsers = await listAllUsers()
            return listedUsers
        }
    } catch (err) {
        return { message: 'Internal Server Error', code: 20, data: [] }
    }
}
