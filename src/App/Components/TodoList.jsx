import React from 'react';
import '../../resources/styles/components/TodoList.css';


function TodoList(props) {
  return (
    <section>
      <ul className="todo-list">{props.children}</ul>
    </section>
  );
}

export { TodoList };
