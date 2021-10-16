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
        <div
          key={todo.firebaseKey}
          todo={todo}
          setTodos={setTodos}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          {todo.complete ? (
            'COMPLETED:  '
          ) : (
            <button
              onClick={() => 'update'}
              className="btn btn-success completeBtn"
              type="button"
            >
              COMPLETE
            </button>
          )}
          {todo.name}
          {todo.complete ? (
            ''
          ) : (
            <button
              onClick={() => 'update'}
              className="btn btn-info completeBtn"
              type="button"
            >
              EDIT
            </button>
          )}
          <button
            onClick={() => 'delete'}
            className="btn btn-danger deleteBtn"
            type="button"
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
}
