import * as React from 'react';
import InputField from './InputField';
import { Todo } from './model';
import './style.css';
import TodoList from './TodoList';

// React.Node supports of all type of type check by hovering over it.

// we can use React.FC to tell that it's a functional component but it's throwing error with function statement hence i used React.React.Node with it

// but with function expression we can use it as it is used below and ReactNode with function expression will throw an error.

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Todo[]>([]);

  // here we can use 3 types for event
  /*
  1. React.ChangeEvent<HTMLInputElement>
  2. React.SyntheticEvent
  3. React.FormEvent
  here we'll use option 3 since it's better. Check Why It's better.
  */

  function handleAdd(event: React.FormEvent) {
    event.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  }
  // console.log(todos);
  return (
    <div>
      <h1> React TypeScript Todo App </h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
