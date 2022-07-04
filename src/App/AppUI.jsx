import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import '../Styles/App/App.css';
import { TodoContext } from './TodoContext';

function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    toggleCompleteTask,
    deleteTask
  } = React.useContext(TodoContext)

  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <div className='info-text'>
          {error && <p>Hubo un error, intenta recargar la página...</p>}
          {loading && <p>Cargando, espera por favor...</p>}
          {(!loading && !searchedTasks.length) && <p>¡Crea tu primera tarea!</p>}
        </div>
        {searchedTasks.map((task) => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => toggleCompleteTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export { AppUI };
