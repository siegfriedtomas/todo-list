import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { TodoForm } from '../Components/TodoForm';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import '../Styles/App/App.css';
import { TodoContext } from './TodoContext';
import { Modal } from '../Components/Modal';
import { Loader } from '../Components/Loader';

function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    toggleCompleteTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <div className="app-container">
      <div className='app-backdrop'></div>
      <div className='app-wrapper'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          <div className='info-text'>
            {error && <p>Something went wrong, try reloading the page...</p>}
            {loading && <Loader/>}
            {(!loading && !searchedTasks.length) && <p>No tasks to show, why don't you add some? 😉</p>}
          </div>
          {searchedTasks.map((task, idx) => (
            <TodoItem
              key={`task-${idx}`}
              task={task}
              completed={task.completed}
              onComplete={() => toggleCompleteTask(task.title)}
              onDelete={() => deleteTask(task.title)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
}

export { AppUI };
