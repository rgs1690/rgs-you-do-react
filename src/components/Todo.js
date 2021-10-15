import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteTodo, updateToDo } from '../api/data/todoData';

export default function Todo({ todo, setTodos, setEditItem }) {
  // if the method is delete it will delete todo with that firebasekey
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(todo.firebaseKey).then(setTodos);
    } else {
      updateToDo({ ...todo, complete: true }).then(setTodos); // if update it will spread todo and change complete to true then set the state of todo
    }
  };
  const TodoStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    h5 {
      flex-grow: 2;
      margin-left: 20px;
    }
    button {
      color: white;
      &:first-child {
        margin-right: 10px;
      }
    }
  `;

  return (
    <>
      <TodoStyle className="alert alert-light" role="alert">
        {todo.complete ? ( // if complete no button will show only text of done
          'DONE '
        ) : (
          // if not complete then button will show and run handleClick function of update if clicked
          <button
            onClick={() => handleClick('update')} // since its passing a method you have to call it as an anonoymous function
            className="btn btn-success completeBtn"
            type="button"
          >
            COMPLETE
          </button>
        )}
        {todo.name}
        <button
          onClick={() => setEditItem(todo)} // edit btn will set the new state of todo
          className="btn btn-info"
          type="button"
        >
          EDIT
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          DELETE
        </button>
      </TodoStyle>
    </>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired, // functions has props need validation too
};

// Todo is a COMPONENT components as a standard use PASCAL case, capital letter first, with every first letter in a word is capital.
// rfc + tab is the shortcut that will create broiler plate to start a component (react snippets extenstion)
// export default function Todo({ todo }) {
//     // destructoring the PROPS (is an object) when you pass something to a component it is called a PROP!
//     // Alert is react strap item, you have to import it (on line 3)
//     return (
//       <>
//         <Alert color="light">
//           <button className="btn btn-success" type="button">
//             COMPLETE
//           </button>
//           {todo.name}
//           <button className="btn btn-danger" type="button">
//             DELETE
//           </button>
//         </Alert>
//       </>
//     );
//   }
//   // PROP VALIDATION! What data type the prop is expecting, helps with debugging, helps others and yourself know what your props should be.
//   // PropTypes is a package from package.json You tell is what component you want to add propTypes to (Todo)then .propTypes then {object}
//   Todo.propTypes = {
//     todo: PropTypes.shape({
//       // the object name: .shape is a method that defines what is inside of the object with what datatypes they are.
//       name: PropTypes.string,
//       complete: PropTypes.bool,
//       date: PropTypes.string,
//       uid: PropTypes.string,
//     }).isRequired, // in order for the Todo component to work it IS required, do you put .isRequired.
//   };
