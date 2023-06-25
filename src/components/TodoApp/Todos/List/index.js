import './style.css';

function List({ filteredTodos, setTodos, toggleAll, setToggleAll }) {

  const onCheck = (e) => {

    const updatedList = filteredTodos.map((todo) => {
      if (todo.id === e.target.id) {
        return {
          ...todo,
          isChecked: !todo.isChecked, // toggle functionality
        };
      }
      return todo;
    });
  
    
    setTodos(updatedList);
    const uncheckedTodo = updatedList.some((todo) => !todo.isChecked);
    uncheckedTodo ? setToggleAll(false) : setToggleAll(true);
  };
  

  const checkAllCompleted = (e) => {
    const areAllChecked = filteredTodos.every((todo) => todo.isChecked);
    const updatedList = filteredTodos.map((todo) => ({
      ...todo,
      isChecked:!areAllChecked,
    }));

    setTodos(updatedList);
    setToggleAll(!areAllChecked);
};

const completed = (todo) => todo.isChecked ? "completed" : "";

const deleteTodo = (id) => {
  const updatedTodos = filteredTodos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};


  return (
        <section className="main">
            <input type="checkbox" className="toggle-all" checked={toggleAll}  id="toggle-all" onChange={checkAllCompleted} />
            <label htmlFor="toggle-all" ></label>
            <ul className="todo-list">
              {
                filteredTodos.map((todo) => {
                  return (
                    <li key={todo.id} className={completed(todo)}>
                      <div className="view">
                        <input type="checkbox" className="toggle" checked={todo.isChecked}  id={todo.id} onChange={onCheck}/>
                        <label>{todo.content}</label>
                        <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
        </section>
  )
}

export default List;