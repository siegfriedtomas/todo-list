import React from 'react';
import { AppUI } from './AppUI';

const defaultTasks = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso de Intro. a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
];

function App() {
  const [userTasks, setUserTasks] = React.useState(defaultTasks);
  const [searchInput, setSearchInput] = React.useState('');

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

  const toggleCompleteTask = (text) => {
    const taskIndex = userTasks.findIndex((task) => task.text === text);
    const newTasks = [...userTasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setUserTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = userTasks.findIndex((task) => task.text === text);
    const newTasks = [...userTasks];
    newTasks.splice(taskIndex, 1);
    setUserTasks(newTasks);
  };

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      searchedTasks={searchedTasks}
      toggleCompleteTask={toggleCompleteTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;
