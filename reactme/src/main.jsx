import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Prueba } from './Prueba.jsx'
import { CardUser } from './CardUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* ctrl + k + c */}
    {/* <Prueba/> */}
    <CardUser/>
    {/* <p></p>
    <img src="" alt="" /> */}
  </StrictMode>,
)
