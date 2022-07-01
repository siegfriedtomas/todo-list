import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(error){
        setError(true);
      }
    }, 1000)
  }, [])

  const saveItem = (newItem) => {
    try{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch(error){
        setError(true);
    }
  }

  return{
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {
  const {
    item: userTasks,
    saveItem: saveTasks,
    loading, 
    error,
   } = useLocalStorage('TASKS_V1', []);
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
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = userTasks.findIndex((task) => task.text === text);
    const newTasks = [...userTasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
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