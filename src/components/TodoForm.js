import { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
