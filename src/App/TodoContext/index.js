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
      const taskText = task.text.toLowerCase();
      const searchText = searchInput.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  const addTask = (text) => {
    const newTasks = [...userTasks];
    newTasks.push({
      completed: false,
      text,
    });
    saveTasks(newTasks);
  };

  const toggleCompleteTask = (text) => {
    const taskIndex = userTasks.findIndex((task) => task.text === text);
    const newTasks = [...userTasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = userTasks.findIndex((task) => task.text === text);
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
