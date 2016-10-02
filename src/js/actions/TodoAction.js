import dispatcher from '../dispatcher';

export function createTodo(title, description) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		title,
		description
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id
	});
}

export function reloadTodos() {
	dispatcher.dispatch({type: 'FETCH_TODOS'});

	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
	      {
	        id: 8484848484,
	        title: "Go Shopping Again",
	        description: 'false'
	      },
	      {
	        id: 6262627272,
	        title: "Hug Wife",
	        description: 'true'
	      },
	    ]});
	}, 1000);	
}