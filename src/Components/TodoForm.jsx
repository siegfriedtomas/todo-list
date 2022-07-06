import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../Styles/Components/TodoForm.css';

function TodoForm() {
    const [newTaskValue, setNewTodoValue] = React.useState('');

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TodoContext)

    

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add New Task</label>
            <textarea 
                value={newTaskValue}
                onChange={onChange}
                placeholder="Escribe tu tarea!"
            />
            <div className="modal-buttons-container">
                <button
                    className='modal-button'
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="modal-button"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }