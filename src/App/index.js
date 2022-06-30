import React from 'react';
import './App.css';
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';

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
    <div className="app-container">
      <TodoCounter totalTasks={totalTasks} completed={completedTasks} />
      <TodoSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <TodoList>
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

export default App;
