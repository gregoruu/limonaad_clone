import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Bubble.css'
import App from './Bubble.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
