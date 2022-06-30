import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchInput, setSearchInput }) {
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
