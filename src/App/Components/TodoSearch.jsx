import React from 'react';
import { TodoContext } from '../TodoContext';
import '../../resources/styles/components/TodoSearch.css';

function TodoSearch() {
  const { searchInput, setSearchInput } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <input
      className="todo-search"
      placeholder="Search task"
      value={searchInput}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
