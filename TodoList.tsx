import * as React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos : Todo[];
  setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList : React.FC<Props> = ({todos, setTodos}) => {

  return (
    <div>
      {todos.map((todo) => {
        return <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      })}
    </div>
  )
}


export default TodoList