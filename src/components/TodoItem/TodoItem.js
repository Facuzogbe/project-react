import React from "react";
import './TodoItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <button className="Button">
        <FontAwesomeIcon 
          icon={faSquareCheck} 
          style={{color: "#1adb00"}} 
          className="Icon"
          onClick={props.onComplete}
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
          onClick={props.onDelete}

        />
      </button>
    </li>
  );
}


export { TodoItem };