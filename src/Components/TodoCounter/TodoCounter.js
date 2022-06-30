import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTasks, completed }) {
  return (
    <h2 className="todo-counter">
      Has completado {completed} de {totalTasks} tareas!
    </h2>
  );
}

export { TodoCounter };
