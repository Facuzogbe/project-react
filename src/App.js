import React from 'react';

// import './App.css';
const todos = [{ text: 'cortar cebolla', completed: false},
              { text: 'tomar el curso de introduccion a React', completed: false},
              { text: 'Llorar con la llorona', completed: false},             
];


function App(props) {
  return (
    <React.Fragment>

    <TodoCounter/>
    <h2>Has completado 2 de 3 TODOs</h2>
    <TodoSearch/>
    <input pplaceholder="Cebolla"/>

    <TodoList>
      {todos.map(todo => (
      <TodoItem />
      ))}
    </TodoList>
     
    <CreateTodoButton/>
    <button>+</button>
    </React.Fragment>
 );
}

export default App;
