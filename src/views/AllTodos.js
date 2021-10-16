import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../api/data/todoData';

export default function AllTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(setTodos);
  }, []);
  //   const handleClick = (key) => {
  //     deleteTodo(key).then(setTodos);
  //   };
  return (
    <div>
      {todos.map((todo) => (
        <>
          <div
            key={todo.firebaseKey}
            todo={todo}
            setTodos={setTodos}
            className="d-flex justify-content-between alert alert-light"
            role="alert"
          >
            {todo.complete ? 'COMPLETED  ' : 'NOT COMPLETED'}
            <div>{todo.name}</div>
          </div>
        </>
      ))}
    </div>
  );
}
