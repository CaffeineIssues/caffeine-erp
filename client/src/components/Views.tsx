import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Dashboard from './Dashboard/Main'
import PrivateRoutes from './Routes/PrivateRoutes'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default Views
