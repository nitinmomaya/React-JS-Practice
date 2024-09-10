import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToastChallenge from './ToastChallenge/ToastChallenge'
import StopWatch from "./Component/Stopwatch/Stopwatch"
import TodoApp from "./TodoList/TodoApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoApp />
    <ToastChallenge />
    <StopWatch />
  </StrictMode>
);
