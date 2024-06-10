import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { TodoForm } from './Components/TodoForm';
import { CreateTaskButton } from './Components/CreateTaskButton';
import '../resources/styles/app/App.css';
import { TodoContext } from './TodoContext';
import { Modal } from './Components/Modal';
import { Loader } from './Components/Loader';

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
        <div className='search-bar-wrapper'>
          <TodoSearch />
          <CreateTaskButton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </div>
        <TodoList>
            {error && (
              <div className='info-text'>
                <p className='info-text'>Something went wrong, try reloading the page...</p>
              </div>
              )}
            {loading && <Loader/>}
            {(!loading && !searchedTasks.length) && <p className='text-center'>No tasks to show, why don't you add some? 😉</p>}
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
      </div>
    </div>
  );
}

// To Do:
// Re-styling all site: change form button position & styling, change border radius, change shadows, make new container, center action.
// Add edit task option.
// Push completed task to button logic.

export { AppUI };
