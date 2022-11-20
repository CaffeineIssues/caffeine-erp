import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Routes/Auth/Login'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default Views
