import React from 'react'
import Views from './components/Views'
import UserContext from './components/Contexts/AccountContext'
function App() {
    return (
        <>
            <UserContext>
                <Views />
            </UserContext>
        </>
    )
}

export default App
