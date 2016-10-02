import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {

	constructor() {
		super();

		this.todos = [
			{
				id: 1,
				title: 'Header 1',
				description: 'Some word about it'
			},
			{
				id: 2,
				title: 'Header 2',
				description: 'Some word about it'
			},
			{
				id: 3,
				title: 'Header 3',
				description: 'Some word about it'
			}
		];
	}

	getAll() {
		return this.todos;
	}

	createTodo(text, description) {
		const id = Date.now();

		this.todos.push({
			id,
			text,
			description
		});

		this.emit("change");
	}

	handlerActions(action) {
		switch(action.type) {
			case 'CREATE_TODO':
				this.createTodo(action.text, action.description);
				break;
			case 'RECEIVE_TODO':
				this.todos = action.todos;
				this.emit("change");
				break;
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handlerActions.bind(todoStore));

export default todoStore;