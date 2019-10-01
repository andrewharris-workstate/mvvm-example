import { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.localStorage = typeof window !== 'undefined' && window.localStorage;
    this.saveNewTodo = this.saveNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
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

  updateTodos(todos) {
    this.setState({ todos }, () => {
      this.localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  saveNewTodo(item) {
    const { todos } = this.state;
    todos.push(item);
    this.updateTodos(todos);
  }

  removeTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.filter((x, i) => i !== id);
    setTimeout(() => this.updateTodos(newTodos), 300);
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
              <TodoItem
                key={item.title.toLowerCase().replace(/\s/g, '-')}
                title={item.title}
                description={item.description}
                todoId={i}
                removeTodo={this.removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
