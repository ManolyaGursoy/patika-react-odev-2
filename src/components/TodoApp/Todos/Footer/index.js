import React from 'react';
import './style.css';

function Footer({ todos, setTodos, footerFilter, setFooterFilter}) {
  
  const clearCompleted = () => {
    const uncheckedTodos = todos.filter((todo) => !todo.isChecked);
    setTodos(uncheckedTodos);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.isChecked).length} </strong>
        {todos.filter((todo) => !todo.isChecked).length === 1 ? 'item' : 'items'} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={() => setFooterFilter('all')} className={footerFilter === 'all' ? 'selected' : ''}>All</a>
        </li>
        <li>
          <a href="#/" onClick={() => setFooterFilter('active')} className={footerFilter === 'active' ? 'selected' : ''}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => setFooterFilter('completed')} className={footerFilter === 'completed' ? 'selected' : ''}>Completed</a>
        </li>
      </ul>

      {todos.some((todo) => todo.isChecked) && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
