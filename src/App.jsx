import { Component } from 'react';
import TodoForm from './TodoForm';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.localStorage = typeof window !== 'undefined' && window.localStorage;
    this.saveNewTodo = this.saveNewTodo.bind(this);
    this.state = {
      todos: this.getTodosFromLocalStorage(),
    };
  }

  getTodosFromLocalStorage() {
    try {
      const todos = JSON.parse(this.localStorage.getItem('todos'));

      if (!Array.isArray(todos)) throw new Error();

      return todos;
    } catch (e) {
      return [];
    }
  }

  saveNewTodo(item) {
    const { todos } = this.state;
    todos.push(item);
    this.setState({ todos }, () => {
      this.localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <div id="todo-list">
          <h1>Todo List</h1>
          <TodoForm saveTodo={this.saveNewTodo} />
          <ul id="todos">
            {todos && todos.map((item, i) => (
              <li todoId={i}>
                <span>{item.title}</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
