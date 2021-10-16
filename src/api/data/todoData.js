import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;
// youll have to change get todos to only get todos that complete=false for stretch goals
const getTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});
const createTodo = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/todos.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/todos/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getTodos(obj).then(resolve);
        });
    })
    .catch(reject);
});

const deleteTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => {
      getTodos().then(resolve);
    })
    .catch(reject);
});

const updateToDo = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/todos/${obj.firebaseKey}.json`, obj)
    .then(() => getTodos().then(resolve))
    .catch(reject);
});

const getCompletedTodos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/todos.json?orderBy="complete"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteCompletedTodo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/todos/${firebaseKey}.json`)
    .then(() => getCompletedTodos().then(resolve))
    .catch(reject);
});
export {
  getTodos,
  createTodo,
  deleteTodo,
  updateToDo,
  getCompletedTodos,
  deleteCompletedTodo,
};
