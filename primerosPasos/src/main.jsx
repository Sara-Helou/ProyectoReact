import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import PrimerComponente from './components/PrimerComponente.jsx'
import SegundoComponente from './components/SegundoComponente.jsx'
import Eventos from './components/Eventos.jsx'
import TercerComponente from './components/TercerComponente.jsx'
import CuartoComponente from './components/CuartoComponente.jsx'

const ficha_medica={
  altura:"175cm",
  peso: "83kg",
  alergias:"ninguna"
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <PrimerComponente/>
    <SegundoComponente/>
    <Eventos/>
    <TercerComponente nombre="Sara" apellidos="Helou González" ficha={ficha_medica}></TercerComponente>
    <CuartoComponente></CuartoComponente>
  </StrictMode>,
)
