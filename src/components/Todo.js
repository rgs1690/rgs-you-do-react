import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

export default function Todo({ todo }) {
  return (
    <>
      <Alert color="light">
        <button className="btn btn-success" type="button">
          COMPLETE
        </button>
        {todo.name}
        <button className="btn btn-danger" type="button">
          DELETE
        </button>
      </Alert>
    </>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
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
