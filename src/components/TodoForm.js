import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';
// FORMS ALWAYS HAVE STATE!!
export default function TodoForm({ obj = {} }) {
  // passing prop of an object to the form.
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
  }); // setting the initial state of the form to obj.name if we are updating OR an empty string otherwise if creating.
  // Function below changes the state of the form input with onChange event.
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      // prevState is a react method that gets the previous state of component.
      ...prevState, // spreading previous state, lets us access the previous state of input and spreading allows us to be able to reassign. ANYTIME you need to modify state in an object
      // you have to spread the items.
      [e.target.name]: e.target.value, // gives us the value fo the input (like when we update), so we do stuff with it.
    })); // handleChange will change to state of formInput everytime to type into the input field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(formInput); // create promise that takes the object of form Input, and below you use the onSubmit
    // with this function on the form tag becuase it is a submit
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
    </> // input needs to be inside of the label tag. you have to set a name of the input and label. Also
    // the name of the input has to match the name of whatever the attribute it is for in the object. Value
    // is the state variable.attribute.
  );
}
// PROP VALIDATION!
TodoForm.propTypes = {
  obj: PropTypes.shape({
    // obj is the prop we are passing TodoForm
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

TodoForm.defaultProps = { obj: {} };
