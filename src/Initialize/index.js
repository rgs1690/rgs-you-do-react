import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

function Initialize() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then(setTodos);
  }, []);
  return (
    <>
      <TodoForm />
      {todos.map((todo) => (
        <Todo key={todo.name} todo={todo} />
      ))}
    </>
  );
}

export default Initialize;

// import React, { useEffect, useState } from 'react';
// import { getTodos } from '../api/data/todoData';
// import Todo from '../components/Todo';
// import TodoForm from '../components/TodoForm';

// function Initialize() {
//   // Initialize is the parent of entire app
//   const [todos, setTodos] = useState([]); // Usestate takes an array of a variable and a function that equals the react method of useState, to set the initial state of the app.
//   useEffect(() => { // tells app what to do after first render and after every update.
//     //  effect takes two arguments, a function and an empty array (without empty array there will be INFINITE LOOP!)
//     getTodos().then(setTodos);
//   }, []);
//   return (
//     // the <> below is because JSX has to have a parent element/ wrapper. Since its only for the wrapper with no other purpose it is called a FRAGMENT
//     // below on line 18 is how you call COMPONENTS in react <ComponentName />
//     // line 23 is how you pass props to components <Todo todo={todo} /> You also have to pass it a key. It expents the same thing you pass the same thing you did when you wrote the function.
//     <>
//       <TodoForm />
//       {todos.map(
//         (
//           todo, // loop through the todos to render them to the dom
//         ) => (
//           <Todo key={todo.name} todo={todo} /> // Todo(with capital T is a COMPONENT)you have to add a key (unique identifer) to each child as well as each element inside children, so we are setting key to todo.name.
//         ),
//       )}
//     </>
//   );
// }

// export default Initialize;
