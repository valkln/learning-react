const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
	dialogues: [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
		{ id: 4, name: 'User 4' },
		{ id: 5, name: 'User 5' },
		{ id: 6, name: 'User 6' }
	],
	messages: [
		{ id: 1, message: "Message 1" },
		{ id: 2, message: 'Message 2' },
		{ id: 3, message: 'Message 3' },
		{ id: 4, message: 'Message 4' },
		{ id: 5, message: 'Message 5' },
		{ id: 6, message: 'Message 6' }
	]
}
const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { id: 7, message: action.data }],
				newMessageText: ''
			}
		default: return state
	}
}
export const addMessageAC = (data) => ({ type: ADD_MESSAGE, data })
export default messagesReducer;