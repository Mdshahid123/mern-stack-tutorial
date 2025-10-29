import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App.jsx'

function Myapp() {
  return <h1>hellow react !</h1>
}

createRoot(document.getElementById('root')).render(
  Myapp()
)

