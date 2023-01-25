import * as React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

// we could have defined them individually like we normally do
//  ({todos, setTodos} : {todos: string, setTodos :React.Dispatch<React.SetStateAction<string>>}) it will also work fine.

// BUT Just to make our code more clean and readable we created an interface.

//  Or we can write like -----
// const InputField : React.FC<Props> = ({todos,setTodos}) =>
// with this we define the component as well.

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form onSubmit={(event) => handleAdd(event)}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter a Task"
      />
      <button type="submit" className="go">
        Go
      </button>
    </form>
  );
};

export default InputField;
