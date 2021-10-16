import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

export default function Home({ todos, setTodos, setEditItem }) {
  return (
    <div>
      <div className="mt-5">
        {todos.map((todo) => (
          <Todo
            key={todo.firebaseKey}
            todo={todo}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
