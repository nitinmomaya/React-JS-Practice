interface Todo {
  id: number;
  task: string;
}

interface TodoListProps {
  todoList: Todo[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList,handleEdit,handleDelete }) => {
  
  return (
    <div>
      {todoList.map((todo: Todo) => (
        <>
          <div key={todo.id}>{todo.task}</div>
          <button
            onClick={() => {
              handleEdit(todo.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            Delete
          </button>
        </>
      ))}
    </div>
  );
};

export default TodoList;
