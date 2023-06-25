import { useState, useEffect } from 'react';
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";
import { useUpdateLocalStorage } from '../CustomHook';
import './style.css';


function Todos() {

  const [todos, setTodos] = useState([]);
  const [footerFilter, setFooterFilter] = useState('all');
  const [toggleAll, setToggleAll] = useState(false);

  const filteredTodos = todos.filter((todo) => {
    switch (footerFilter) {
      case 'active':
        return !todo.isChecked;
      case 'completed':
        return todo.isChecked;
      default:
        return true; // 'all' filter or default case
    }
  });

  useEffect(() => {
    // Retrieve todos from localStorage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useUpdateLocalStorage(todos); // calling the custom hook (updates todos on localStorage)

  return (
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <Form todos={todos} setTodos={setTodos} />
          </header>
            <List filteredTodos={filteredTodos} setTodos={setTodos} toggleAll={toggleAll} setToggleAll={setToggleAll} />
            <Footer todos={todos} setTodos={setTodos} setFooterFilter={setFooterFilter}/>
        </section>
  );
}

export default Todos;