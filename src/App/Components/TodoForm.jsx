import React from 'react';
import { TodoContext } from '../TodoContext';
import '../../resources/styles/components/TodoForm.css';

function TodoForm() {
    const [taskTitle, setTaskTitle] = React.useState('');
    const [taskDescription, setTaskDescription] = React.useState('');

    const {
        addTask,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(taskTitle, taskDescription);
        setOpenModal(false);
    };

    return (
        <form className='new-task-form' onSubmit={onSubmit}>
            <label className='field-label' htmlFor="title-field">New task title</label>
            <textarea
                id='title-field'
                className='title-field'
                placeholder='Title'
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                rows={1}
                required
            />
            <label htmlFor="description-field">Task description</label>
            <textarea
                id="description-field"
                className='description-field'
                placeholder='Short description'
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
                rows={3}
            />
            <div className="modal-buttons-container">
                <button className="modal-button button-cancel" type="button" onClick={onCancel} >Cancel</button>
                <button className="modal-button button-add" type="submit"> Add </button>
            </div>
        </form>
    )
}

export { TodoForm }