import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Prueba } from './Prueba.jsx'
import { CardUser } from './CardUser.jsx'
import { Pruebita } from './Pruebita.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <ThemeProvider>
        <Pruebita/>
        <CardUser/>
    </ThemeProvider>
    </>
)
