import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StopWatch from './Component/Stopwatch/Stopwatch'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <StopWatch/>
  </StrictMode>,
)
