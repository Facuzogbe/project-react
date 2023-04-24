import React from "react";
import './TodoItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste el to-do' + props.text);
  }
  const onDelete = () => {
    alert ('Borraste el to-do' + props.text);
  }

  return (
    <li className="TodoItem">
      <button className="Button">
        <FontAwesomeIcon 
          icon={faSquareCheck} 
          style={{color: "#1adb00"}} 
          className="Icon"
          onClick={onComplete}
        />
      </button>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <button className="Button">
        <FontAwesomeIcon 
          icon={faTrash} 
          style={{color: "#2208e2"}} 
          className="Icon"
          onClick={onDelete}

        />
      </button>
    </li>
  );
}


export { TodoItem };