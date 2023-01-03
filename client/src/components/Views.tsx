import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Dashboard from './Dashboard/Main'
import PrivateRoutes from './Routes/PrivateRoutes'
import UserList from './Dashboard/Shared/Administration/Users/Main'
import CompanyList from './Dashboard/Shared/Administration/Companies/Main'

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/*Administração*/}
            <Route path="/administration/users" element={<UserList />} />
            <Route path="/administration/companies" element={<CompanyList />} />

            <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default Views
