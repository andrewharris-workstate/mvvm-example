import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
  const {
    todoId,
    title,
    description,
    removeTodo,
  } = props;

  const labelFor = `done-${todoId}`;

  return (
    <li className="todo">
      <span className="todo__title">{title}</span>
      <pre className="todo__desc">{description}</pre>
      <label className="todo__done" htmlFor={labelFor}>
        <input
          type="checkbox"
          id={labelFor}
          onChange={() => removeTodo(todoId)}
        />Done
      </label>
    </li>
  );
};

TodoForm.propTypes = {
  todoId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoForm;
