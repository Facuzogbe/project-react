import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {

  const onClickButton = (msg) => {
    alert(msg);
  };


  return <button 
    className="CreateTodoButton"
    onClick={() =>onClickButton('Vas a agregar un Nuevo To-do')}
    >
    +
    </button>;
}

export { CreateTodoButton };
