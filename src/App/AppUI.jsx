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
            {(!loading && !searchedTasks.length) && <p>It seems to be that there ain't no tasks assigned, why don't you add some tasks 😉?</p>}
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
