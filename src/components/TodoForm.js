import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo, updateToDo } from '../api/data/todoData';
// FORMS ALWAYS HAVE STATE!!
const initialState = {
  name: '',
  complete: false,
  uid: '',
};
export default function TodoForm({ obj = {}, setTodos, setEditItem }) {
  const [formInput, setFormInput] = useState(initialState);
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // using useEffect to check if theres firebasekey and setForm input IF the obj has does
  // carbon copy of what object should look like upon submit. Want values inside of form to be in input.
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        complete: obj.complete,
        date: obj.date,
        uid: obj.uid,
      });
    }
  }, [obj]);
  // dependancy array watches object and if object updates the useEffect will run and rerender object
  const resetForm = () => {
    setFormInput({ ...initialState }); // you can spread it or just pass initalState So the state goes back to initial state
    setEditItem({});
  };
  // if the obj has a firebasekey run updateToDo passing it the form input and then getting and setting todos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateToDo(formInput).then((todos) => {
        setTodos(todos);
        resetForm();
      });
    } else {
      createTodo({ ...formInput, date: new Date() }).then((todos) => {
        // adding date of when todo is created
        setTodos(todos); // passing functions that setsTodos state, updating DOM with new TOdo and reset form
        resetForm();
      });
    }
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
        <button type="submit">{obj.firebaseKey ? 'UPDATE' : 'SUBMIT'}</button>
      </form>
    </>
    // button will submit if creating and there is no firebasekey but will show update if edit button was clicked
  );
}
// PROP VALIDATION!
TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }),
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

TodoForm.defaultProps = { obj: {} };

// FORMS ALWAYS HAVE STATE!!
// export default function TodoForm({ obj = {} }) {
//     // passing prop of an object to the form.
//     const [formInput, setFormInput] = useState({
//       name: obj.name || '',
//     }); // setting the initial state of the form to obj.name if we are updating OR an empty string otherwise if creating.
//     // Function below changes the state of the form input with onChange event.
//     const handleChange = (e) => {
//       setFormInput((prevState) => ({
//         // prevState is a react method that gets the previous state of component.
//         ...prevState, // spreading previous state, lets us access the previous state of input and spreading allows us to be able to reassign. ANYTIME you need to modify state in an object
//         // you have to spread the items.
//         [e.target.name]: e.target.value, // gives us the value fo the input (like when we update), so we do stuff with it.
//       })); // handleChange will change to state of formInput everytime to type into the input field
//     };
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       createTodo(formInput); // create promise that takes the object of form Input, and below you use the onSubmit
//       // with this function on the form tag becuase it is a submit
//     };
//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">
//             Name
//             <input
//               name="name"
//               id="name"
//               value={formInput.name}
//               onChange={handleChange} // calling on change callback function
//               required
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       </> // input needs to be inside of the label tag. you have to set a name of the input and label. Also
//       // the name of the input has to match the name of whatever the attribute it is for in the object. Value
//       // is the state variable.attribute.
//     );
//   }
//   // PROP VALIDATION!
//   TodoForm.propTypes = {
//     obj: PropTypes.shape({
//       // obj is the prop we are passing TodoForm
//       name: PropTypes.string,
//       id: PropTypes.string,
//     }),
//   };
//   TodoForm.defaultProps = { obj: {} };
