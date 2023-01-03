import express from 'express'
import { Request, Response } from 'express'
import { insertUser, listUsers } from '../controllers/userController'
const router = express.Router()

router.route('/').post(async (req: Request, res: Response) => {
    try {
        const user = await insertUser(req.body)
        res.status(200).json({ message: 'User created successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

router.route('/:empresa_id').get(async (req: Request, res: Response) => {
    try {
        const empresa_id: number = req.params.empresa_id as unknown as number
        const userList = await listUsers(empresa_id)
        res.status(200).json(userList)
    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error',
            code: 10,
            data: [],
        })
    }
})

export default router
