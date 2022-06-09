import React from 'react';
import './App.css';
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el curso de Intro. a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <div className="app-container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
