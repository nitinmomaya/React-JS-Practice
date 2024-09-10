import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToastChallenge from './ToastChallenge/ToastChallenge'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ToastChallenge/>
  </StrictMode>,
)
