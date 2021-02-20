import { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add a todo"
        value={input}
        name="text"
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
