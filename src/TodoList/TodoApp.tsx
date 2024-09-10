import { ChangeEvent, useState } from "react";
import Input from "./Component/Input/Input";
import TodoList from "./Component/TodoList/TodoList";
interface Todo {
  id: number;
  task: string;
}
function TodoApp() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [isEdit, setIsEdit] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.trim() === "") {
      alert("Enter Task");
    } else if (isEdit != 0) {
      setTodoList((prev: Array<Todo>) => {
        const editTask = prev.map((task) =>
          task.id === isEdit ? { ...task, task: todo } : task
        );
        return [...editTask];
      });
    } else {
      setTodoList((prev: Array<Todo>) => [
        ...prev,
        { id: Date.now(), task: todo },
      ]);
    }
    setTodo("");
  };

  const handleEdit = (id: number) => {
    const isTodoList: Array<Todo> = todoList.filter(
      (todo: Todo) => todo.id === id
    );
    setTodo(isTodoList[0]?.task);
    setIsEdit(id);
  };

  const handleDelete = (id: number) => {
    setTodoList((prev: Array<Todo>) => {
      const deleteTask = prev.filter((task: Todo) => task?.id != id);
      return [...deleteTask];
    });
  };
  return (
    <>
      <div>Create your Own TodoList</div>
      <Input value={todo} handleChange={handleChange} />
      <TodoList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todoList={todoList}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </>
  );
}

export default TodoApp;
