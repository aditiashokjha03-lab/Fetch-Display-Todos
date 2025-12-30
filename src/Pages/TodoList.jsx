import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../API/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} - {todo.completed ? "✅ Done" : "❌ Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;