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
    this.props.saveTodo(todo);
  }

  render() {
    return (
      <div id="todo-form">
        <fieldset>
          <input ref={this.titleInput} type="text" id="title" placeholder="Title" />
          <textarea ref={this.descInput} id="description" placeholder="Description" />
          <button type="button" id="save-btn" onClick={this.getTodoInfo}>Save</button>
        </fieldset>
      </div>
    );
  }
}

TodoForm.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default TodoForm;
