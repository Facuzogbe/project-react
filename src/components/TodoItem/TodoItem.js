import React from "react";
import './TodoItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <button className="Button">
        <FontAwesomeIcon icon={faSquareCheck} style={{color: "#1adb00"}} className="Icon"/>
      </button>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <button className="Button">
        <FontAwesomeIcon icon={faTrash} style={{color: "#2208e2"}} className="Icon"/>
      </button>
    
    </li>
  );
}


export { TodoItem };