import React, { useEffect } from 'react';
import getTodos from '../api/data/todoData';

function Initialize() {
  useEffect(() => {
    getTodos().then(console.warn);
  }, []);
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}

export default Initialize;
