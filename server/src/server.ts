import { load } from 'ts-dotenv'
import express, { Application, Request, Response, NextFunction } from 'express'
import session from 'express-session'
declare module 'express-session' {
    export interface SessionData {
        user: { [key: string]: any }
    }
}

import helmet from 'helmet'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import {
    ClientToServerEvents,
    InterServerEvents,
    ServerToClientEvents,
    SocketData,
} from './types/socketIO'
import { handleConnect } from './utils/handleConnection'
import SessionSettings from './types/session'
import authRouter from './routers/authRouter'
import userRouter from './routers/userRouter'
import fieldsRouter from './routers/fieldsRouter'

const { COOKIE_SECRET, ENVIRONMENT, PORT, API_NAME, BASE_URL } = load({
    COOKIE_SECRET: String,
    PORT: Number,
    ENVIRONMENT: ['production' as const, 'development' as const],
    API_NAME: String,
    BASE_URL: String,
})

const app: Application = express()
const server = http.createServer(app)
const io = new Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
>(server, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)

app.use(
    session({
        secret: COOKIE_SECRET,
        credentials: true,
        name: 'sid',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: ENVIRONMENT === 'production' ? 'true' : 'auto',
            httpOnly: true,
            expires: 1000 * 60 * 60 * 24 * 7,
            sameSite: ENVIRONMENT === 'production' ? 'none' : 'lax',
        },
    } as unknown as SessionSettings)
)
app.use(helmet())

app.use(express.json())

io.on('connection', handleConnect)

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/fields', fieldsRouter)

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    res.status(500).send('Internal Server Error')
})

server.listen(4000, () => {
    console.log(`${API_NAME} rodando na porta ${PORT}`)
})
