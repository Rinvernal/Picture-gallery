import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { Toaster } from 'react-hot-toast'
import "./variables.css"
import "./index.css"
import Modal from "react-modal";
Modal.setAppElement("#root");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </StrictMode>,
)
