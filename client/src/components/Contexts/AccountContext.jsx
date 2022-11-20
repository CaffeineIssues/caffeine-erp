import { useNavigate } from 'react-router'

const { createContext, useState, useEffect } = require('react')

export const AccountContext = createContext()

const UserContext = ({ children }) => {
    const ENDPOINT = process.env.REACT_APP_BASE_URL_API_SERVER
    let url = window.location.href

    const [pic, setPic] = useState('1')
    const [page, setPage] = useState('Titulo da Pagina')
    const [user, setUser] = useState({
        loggedIn: null,
        username: null,
        device: null,
        name: null,
        email: null,
    })
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL_API_SERVER}/auth/login`, {
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
                console.log('2')
                if (!r || !r.ok || r.status >= 400) {
                    setUser((user) => {
                        return { loggedIn: false }
                    })
                    return
                }
                return r.json()
            })
            .then((data) => {
                console.log('3')
                if (!data) {
                    setUser((user) => {
                        return { loggedIn: false }
                    })
                    return
                }
                setUser({ ...data })
                if (data.id_contrato === 0) {
                    navigate('/cadastro/plano', {
                        state: {
                            client_id: data.id_cliente_deovita,
                            name: data.name,
                            cpf: data.cpf,
                        },
                    })
                } else {
                    navigate('/dashboard')
                }
            })
    }, [])
    return (
        <AccountContext.Provider
            value={{ user, setUser, page, setPage, pic, setPic }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export default UserContext
