import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllTodos } from '../api/data/todoData';

export default function AllTodos({ setTodos }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllTodos().then((todoArray) => {
      if (isMounted) setAllTodos(todoArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  //   const handleClick = (key) => {
  //     deleteTodo(key).then(setTodos);
  //   };
  return (
    <div>
      {allTodos.map((allTodo) => (
        <div
          key={allTodo.firebaseKey}
          setTodos={setTodos}
          className="d-flex justify-content-between alert alert-light"
          role="alert"
        >
          {allTodo.complete ? 'COMPLETED  ' : 'NOT COMPLETED'}
          <div>{allTodo.name}</div>
        </div>
      ))}
    </div>
  );
}
AllTodos.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
