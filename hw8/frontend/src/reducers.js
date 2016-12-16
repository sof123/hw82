const Reducer = (state =  {
	nextId: 2,
	headline: "",
	location: "Landing.js",
	posts: [],
	todoItems: [
	    {id: 0, text: "This is an item", done: false, displayArticles: false},
	    {id: 1, text: "Another item", done: false, displayArticles: false}
	],
	visibilityFilter: 'SHOW_ALL'
}, action) => {
	switch(action.type) {
		case 'loginToDo':
		console.log("in login todo ")
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'logoutToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToProfileToDo':
			return { ...state, nextId: state.nextId + 1, location: "Profile.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'updateHeadlineToDo':
			console.log("in update headline to do")
			console.log("payload", action.payload)
			return { ...state, nextId: state.nextId + 1, headline: action.payload, location: "Main.js", posts: [...state.posts, action.text],
					todoItems: [ ...state.todoItems,
						{id:state.nextId, done: false,}]
			}
		case 'getArticlesToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, displayArticles:true}]
		}
		case 'goToLandingToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToMainToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}

		case 'SET_VISIBILITY_FILTER':
			return { ...state, visibilityFilter: action.filter }
		default:
			return state
	}
}

export default Reducer
