import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../components/Modal/Modal";

function AppUI() {
  const { 
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {error && <p>Desesperate, hubo un error...</p>}
            {loading && <p>estamos cargando, no desesperes...</p>}
            {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
        {!!openModal &&(
          <Modal>
            <p>{searchedTodos[0]?.text}</p>
          </Modal>
        )}

      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
