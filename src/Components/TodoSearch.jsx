import React from 'react';
import '../Styles/Components/TodoSearch.css';

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
