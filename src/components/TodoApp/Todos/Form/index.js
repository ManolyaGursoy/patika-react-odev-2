import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

function Form({ todos, setTodos }) {

  const [todoInput, setTodoInput] = useState({ content: '', isChecked: false});

  useEffect(() => {
    console.log(todos)
  },[todos]);


  const handleChange = (e) => {
    setTodoInput({ ...todoInput, content: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.content.trim() === '') {
      alert('Empty to-do items are not added to the list. Please write a to-do.');
      return;
    }
    const newTodo = {
      id: uuidv4(),
      content: todoInput.content,
      isChecked: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTodoInput({ content: '', isChecked: false }); // to clean out the input field
  };

  return (
        <form onSubmit={handleSubmit}>
          <input className="new-todo" placeholder="What needs to be done?" value={todoInput.content} autoFocus onChange={handleChange} />
        </form>
  );
}

export default Form;
