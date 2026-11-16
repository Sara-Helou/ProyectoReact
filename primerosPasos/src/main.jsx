import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import PrimerComponente from './components/PrimerComponente.jsx'
import SegundoComponente from './components/SegundoComponente.jsx'
import Eventos from './components/Eventos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <PrimerComponente/>
    <SegundoComponente/>
    <Eventos/>
  </StrictMode>,
)
