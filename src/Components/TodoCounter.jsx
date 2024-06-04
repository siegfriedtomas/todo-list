import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../Styles/Components/TodoCounter.css';

function TodoCounter() {
  const { totalTasks, completedTasks } = React.useContext(TodoContext)
  
  return (
    <h2 className="todo-counter">
      { totalTasks !== 0 
          ? <>
              { totalTasks === completedTasks 
                ? <span> 🎉 You completed every task 🎉 </span>
                : <span> You have completed {completedTasks} of {totalTasks} tasks </span>
              }
            </>
          : <span> No tasks assigned </span>
      }
    </h2>
  );
}

export { TodoCounter };
