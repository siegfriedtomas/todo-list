import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../Styles/Components/TodoCounter.css';

function TodoCounter() {
  const { totalTasks, completedTasks } = React.useContext(TodoContext)
  
  return (
    <h2 className="todo-counter">
      Has completado {completedTasks} de {totalTasks} tareas!
    </h2>
  );
}

export { TodoCounter };
