import * as Yup from 'yup'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { getUserByUsername, getUserById } from '../models/authModel'
import AuthPayload from '../types/session'

export const postCashedAuth = async function (req: Request, res: Response) {
    const auth: AuthPayload = req.body
    console.log(auth)
    const authSchema = Yup.object({
        username: Yup.string().required().min(6).max(28).label('username'),
        password: Yup.string().required().min(6).max(28).label('password'),
    })

    try {
        authSchema.validateSync(auth)
        return await postNewAuth(auth)
    } catch (error) {
        console.log(error)
        throw ['controller_error', error]
    }
}

export const postNewAuth = async function (auth: any) {
    const username = auth.username
    const password = auth.password

    const potentialLogin = await getUserByUsername(username)

    if (potentialLogin.length > 0) {
        const isSamePass = await bcrypt.compare(
            password,
            potentialLogin[0].passhash
        )
        if (isSamePass) {
            const userId = potentialLogin[0].user_id
            const returnPostClient = await getUserById(userId)
            if (returnPostClient.length <= 0)
                return { loggedIn: false, status: 'Usuario invalido!' }

            const client = returnPostClient[0]

            const responseData = {
                username: username,
            }
            return { loggedIn: true, data: responseData }
        } else {
            return { loggedIn: false, status: 'Senha Errada!' }
        }
    } else {
        return { loggedIn: false, status: 'Usuario não cadastrado!' }
    }
}

export const fetchData = async function (userId: number) {
    const returnPostClient = await getUserById(userId)
    const client = returnPostClient[0]

    return {
        username: client.username,
    }
}
