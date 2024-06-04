import React from 'react';
import '../Styles/Components/TodoItem.css';

function TodoItem(props) {
  const {completed, task, onComplete, onDelete} = props;
  const {title, description} = task;
  return (
    <li className="todo-item">
      <span
        className={`todo-item__icon todo-item__icon-check 
        ${completed && 'todo-item__icon-check--active'}`}
        onClick={onComplete}
      >
        {completed ? '✅' : '❌'}
      </span>
      <div>
        <p
          className={`todo-item__text 
          ${completed && 'todo-item__text--completed'}`}
        >
          {title}
        </p>
        <p
          className={`todo-item__text
          ${completed && 'todo-item__text--completed'}`}
        >
          {description}
        </p>
      </div>
      <span
        className="todo-item__icon todo-item__icon-delete"
        onClick={onDelete}
      >
        🗑
      </span>
    </li>
  );
}

export { TodoItem };
