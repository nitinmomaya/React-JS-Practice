import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToastChallenge from './ToastChallenge/ToastChallenge'
import TodoApp from "./TodoList/TodoApp"


createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <ToastChallenge/>
  <TodoApp/>
  </StrictMode>
);
