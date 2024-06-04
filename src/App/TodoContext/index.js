import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: userTasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TASKS_V1', []);
  const [searchInput, setSearchInput] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTasks = userTasks.filter((task) => task.completed).length;
  const totalTasks = userTasks.length;

  let searchedTasks = [];

  if (!searchInput.length >= 1) {
    searchedTasks = userTasks;
  } else {
    searchedTasks = userTasks.filter((task) => {
      const taskTitle = task.title.toLowerCase();
      const searchText = searchInput.toLowerCase();
      return taskTitle.includes(searchText);
    });
  }

  const addTask = (title, description) => {
    const newTasks = [...userTasks];
    newTasks.push({
      completed: false,
      title,
      description
    });
    saveTasks(newTasks);
  };

  const toggleCompleteTask = (title) => {
    const taskIndex = userTasks.findIndex((task) => task.title === title);
    const newTasks = [...userTasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    saveTasks(newTasks);
  };

  const deleteTask = (title) => {
    const taskIndex = userTasks.findIndex((task) => task.title === title);
    const newTasks = [...userTasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTasks,
        completedTasks,
        searchInput,
        setSearchInput,
        searchedTasks,
        toggleCompleteTask,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
