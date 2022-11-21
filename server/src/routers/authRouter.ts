import express from 'express'
import { Request, Response } from 'express'

const router = express.Router()
import { postCashedAuth, fetchData } from '../controllers/authController'

router
    .route('/login')
    .get(async (req: Request, res: Response) => {
        if (req.session.user && req.session.user.username) {
            const user = await fetchData(req.session.user.username)
            res.json({
                loggedIn: true,
                ...user,
            })
        } else {
            res.json({ loggedIn: false })
        }
    })
    .post(async (req, res) => {
        try {
            const auth = await postCashedAuth(req, res)
            if (auth.loggedIn) {
                req.session.user = auth.data
                res.json({ loggedIn: true, ...auth.data })
            } else {
                res.json(auth)
            }
        } catch (error) {
            console.log(error)
            switch (error) {
                case 'controller_error':
                    res.status(400).json(error)
                    break
                default:
                    res.status(500).send('Internal Server Error')
            }
        }
    })

export default router
