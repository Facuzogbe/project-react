import React from 'react';
import { TodoCounter} from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButtom } from "./components/CreateTodoButtom/CreateTodoButtom";

// import './App.css';

const todos =[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App(props) {
  return (
    <React.Fragment>

    <TodoCounter/>
    <TodoSearch/>

     <TodoList>
      {todos.map(todo => (
      <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
     
    <CreateTodoButtom/>

    </React.Fragment>
 );
}

export default App;
