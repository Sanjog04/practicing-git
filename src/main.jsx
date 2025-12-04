import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <p>My name is Sanjog</p>
    <h1>This is a sample message I'm adding for trial purpose.</h1>
  </StrictMode>,
)
