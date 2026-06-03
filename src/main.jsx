import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// This is the React entry point.
// Vite loads index.html, finds <div id="root">, and React renders <App />
// inside that element. Most website edits should happen in App.jsx or components.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
