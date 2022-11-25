import { useNavigate } from 'react-router'
import { Account } from '../Types/contexts/account'
import { createContext, useEffect, useState } from 'react'

interface LoginProviderProps {
    children: React.ReactNode
}

export const AccountContext = createContext({
    user: {} as Account,
    setUser: (user: Account) => {},
    page: 'Titulo da Pagina',
    setPage: (page: string) => {},
})

export const UserContext = ({ children }: LoginProviderProps) => {
    const [page, setPage] = useState('')
    const [user, setUser] = useState<Account>({
        loggedIn: null,
        username: null,
    })
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:4000/auth/login`, {
            credentials: 'include',
        })
            .catch((err) => {
                console.log('1')
                setUser((user) => {
                    return { loggedIn: false }
                })
                return
            })
            .then((r) => {
                if (!r || !r.ok || r.status >= 400) {
                    console.log('2')
                    setUser((user: Account) => {
                        console.log(user)
                        return { loggedIn: false }
                    })
                    return
                }
                return r.json()
            })
            .then((data) => {
                console.log(data)
                console.log('3')
                if (data.loggedIn === false) {
                    console.log('aqui')
                    setUser((user: Account) => {
                        return { loggedIn: false }
                    })
                    return
                } else {
                    console.log(user)
                    navigate('/dashboard')
                }
            })
    }, [])

    return (
        <AccountContext.Provider
            value={{
                user,
                setUser,
                page,
                setPage,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export default UserContext
