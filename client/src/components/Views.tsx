import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Dashboard from './Dashboard/Main'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Views
