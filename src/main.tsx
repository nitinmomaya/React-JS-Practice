import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoApp from './TodoList/TodoApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>,
)
