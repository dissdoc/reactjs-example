import React from 'react';

import TodoItem from '../components/TodoItem';
import TodoStore from '../stores/TodoStore';
import * as TodoAction from "../actions/TodoAction";

export default class Featured extends React.Component {

	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll() 
		}
	}

	componentWillMount() {
		TodoStore.on("change", this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener("change", this.getTodos);
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getAll()
		});
	}

	reloadTodos() {
		TodoAction.reloadTodos();
	}

	render() {
		const { todos } = this.state;

		const TodoComponent = todos.map((todo) => {
			return <TodoItem key={todo.id} { ...todo }/>
		});

		return (
			<div>
				<button onClick={this.reloadTodos.bind(this)}>Reload!</button>
				<h1>Todo List. Featured</h1>
				<div>{ TodoComponent }</div>
			</div>
		);
	}
}