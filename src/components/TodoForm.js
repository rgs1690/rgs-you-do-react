import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';
// FORMS ALWAYS HAVE STATE!!
export default function TodoForm({ obj = {} }) {
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
  });
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(formInput);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

TodoForm.defaultProps = { obj: {} };
