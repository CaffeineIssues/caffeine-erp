export default interface CookieSettings {
    secure: boolean | 'auto' | undefined
    httpOnly: boolean
    expires: Date
    sameSite: boolean | 'none' | 'lax'
}

export default interface SessionSettings {
    secret: string
    credentials: boolean
    name: string
    resave: boolean
    saveUninitialized: boolean
    cookie: CookieSettings
}

export default interface AuthPayload {
    username: string
    password: string
}
