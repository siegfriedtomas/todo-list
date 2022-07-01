import React from 'react';
import '../Styles/Components/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span
        className={`todo-item__icon todo-item__icon-check 
        ${props.completed && 'todo-item__icon-check--active'}`}
        onClick={props.onComplete}
      >
        {props.completed ? '✅' : '❌'}
      </span>
      <p
        className={`todo-item__text 
        ${props.completed && 'todo-item__text--completed'}`}
      >
        {props.text}
      </p>
      <span
        className="todo-item__icon todo-item__icon-delete"
        onClick={props.onDelete}
      >
        🗑
      </span>
    </li>
  );
}

export { TodoItem };
