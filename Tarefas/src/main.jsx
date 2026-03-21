import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tarefas from './Tarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarefas />
  </StrictMode>,
)
