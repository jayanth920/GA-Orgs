import {useState} from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    // add the todo
    setTodos([...todos, {todo: newTodo, completed: false}]);
    // clean up after ourselves
    setNewTodo('');
  }

  function handleUpdate(updatedTodo, idx) {
    const todosCopy = [...todos];
    todosCopy[idx] = updatedTodo;
    setTodos(todosCopy);
  }

  function handleDelete(toDelete) {
    // const todosCopy = [...todos];
    // todos.splice(idx, 1);
    const filteredTodos = todos.filter(todo => todo !== toDelete);
    setTodos(filteredTodos);
  }

  return (
    <div className="App">
      <h1>React Todos!</h1>
      {/* input for todos */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="new todo" 
          value={newTodo} 
          onChange={evt => setNewTodo(evt.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Completed?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, idx) => (
          <Todo 
            key={idx} 
            todo={todo} 
            idx={idx} 
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
