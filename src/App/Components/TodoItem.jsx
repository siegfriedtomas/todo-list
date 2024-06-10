import React from 'react';
import '../../resources/styles/components/TodoItem.css';
import { Svg } from './Svg';
import { DeleteSvg } from '../../resources/images/delete';
import { EditSvg } from '../../resources/images/edit';
import { EmptyCheckSvg } from '../../resources/images/empty-check';
import { FilledCheckSvg } from '../../resources/images/filled-check';

function TodoItem(props) {
  const {completed, task, onComplete, onDelete} = props;
  const {title, description} = task;
  return (
    <li className="todo-item">
      <div className="task-text-wrapper">
        <button
          className={`todo-item__icon todo-item__icon-check 
          ${completed && 'todo-item__icon-check--active'}`}
          onClick={onComplete}
        >
          {completed ? (<FilledCheckSvg />) : (<EmptyCheckSvg />)}
        </button>
        <div className='text-wrapper'>
          <h3
            className={`todo-item__text-title
            ${completed && 'todo-item__text--completed'}`}
          >
            {title}
          </h3>
          <p
            className={`todo-item__text-description
            ${completed && 'todo-item__text--completed'}`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className='task-options-wrapper'>
        <button
          className="todo-item__icon todo-item__icon-delete"
          onClick={onDelete}
        >
          <EditSvg></EditSvg>
        </button>
        <button
          className="todo-item__icon todo-item__icon-delete"
          onClick={onDelete}
        >
          <DeleteSvg></DeleteSvg>
        </button>
      </div>
    </li>
  );
}

export { TodoItem };
