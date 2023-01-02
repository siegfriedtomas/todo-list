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
            />
            <div className="modal-buttons-container">
                <button className="modal-button button-cancel" type="button" onClick={onCancel} >Cancel</button>
                <button className="modal-button button-add" type="submit"> Add </button>
            </div>
        </form>
    )
}

export { TodoForm }