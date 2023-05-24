import React from "react";
import {TodoContext} from '../TodoContext';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
        // TODO
    };
    const onCancel = () => {
        setOpenModal(false);
        // TODO
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
        // TODO
    };

    return (
        <form onSubmit={ onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}>
                    cancelar
                </button>
                <button
                    onClick={onSubmit}>
                    Añadir
                </button>
            </div>
        </form>
    );
}


export { TodoForm };