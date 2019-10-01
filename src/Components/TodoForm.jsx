import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.descInput = React.createRef();
    this.getTodoInfo = this.getTodoInfo.bind(this);
  }

  getTodoInfo() {
    const todo = {
      title: this.titleInput.current.value,
      description: this.descInput.current.value,
    };

    // if no title, don't save
    if (!todo.title) return;

    this.props.saveTodo(todo);

    // clear fields
    this.titleInput.current.value = '';
    this.descInput.current.value = '';
  }

  render() {
    return (
      <div id="todo-form">
        <fieldset>
          <input
            ref={this.titleInput}
            type="text"
            placeholder="Title (required)"
          />
          <textarea
            ref={this.descInput}
            placeholder="Description"
          />
          <button
            type="button"
            onClick={this.getTodoInfo}
          >
            Save
          </button>
        </fieldset>
      </div>
    );
  }
}

TodoForm.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default TodoForm;
