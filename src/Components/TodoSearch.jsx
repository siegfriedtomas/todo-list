import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../Styles/Components/TodoSearch.css';

function TodoSearch() {
  const { searchInput, setSearchInput } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchInput}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
