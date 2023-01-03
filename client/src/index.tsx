import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import theme from './theme'
import './index.css'
import '@fontsource/readex-pro/400.css'
import '@fontsource/readex-pro/700.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </BrowserRouter>
)
