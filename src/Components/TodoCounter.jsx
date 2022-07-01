import React from 'react';
import '../Styles/Components/TodoCounter.css';

function TodoCounter({ totalTasks, completedTasks }) {
  return (
    <h2 className="todo-counter">
      Has completado {completedTasks} de {totalTasks} tareas!
    </h2>
  );
}

export { TodoCounter };
