import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";

function AppUI() {
  const { 
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo 
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
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
