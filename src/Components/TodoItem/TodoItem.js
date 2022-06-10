import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Completaste el item: ' + props.text);
  };

  const onDelete = () => {
    alert('Eliminaste el item: ' + props.text);
  };

  return (
    <li className="todo-item">
      <span
        className={`todo-item__icon todo-item__icon-check 
        ${props.completed && 'todo-item__icon-check--active'}`}
        onClick={onComplete}
      >
        ✓
      </span>
      <p
        className={`todo-item__text 
        ${props.completed && 'todo-item__text--completed'}`}
      >
        {props.text}
      </p>
      <span
        className="todo-item__icon todo-item__icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
