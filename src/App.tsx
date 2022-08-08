import React, {useState} from 'react';

import {IItem} from './types/todo'
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';


const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);
  function addTodo (todo:IItem):void {
    setTodos((prevTodos) =>{
      return [
        ...prevTodos,
        todo
      ]
    })
  }

  function delTodo(id:string):void {
    setTodos((prevTodos) =>{
      return prevTodos.filter(item => item.id !== id);
  })
}
  return (
    <>
      <AddTodo addTodo = {addTodo} />
      <ToDoList delTodo={delTodo} todos={todos} />
    </>
  );
}

export default App;
