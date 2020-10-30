const initialState = {
    todos: [
    ]
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, todos: [action.payload, ...state.todos] }
        case "DEL":
            const afterremove = state.todos.filter(item => item.id !== action.payload.id)
            return { ...state, todos: afterremove }
        case "COMPLETE":
            const selectedtask = state.todos.filter(item => item.id === action.payload.id)[0]
            const status = selectedtask.complete == true ? false : true
            const afterremovecompleted = state.todos.filter(item => item.id !== action.payload.id)
            return { ...state, todos: [...afterremovecompleted, { ...action.payload, complete: status }] }
        case "UPDATE":
            const afterUpdatecompleted = state.todos.filter(item => item.id !== action.payload.id)
            return { ...state, todos: [action.payload, ...afterUpdatecompleted] }
        case "SET":
            return { ...state, todos: action.payload }


        default:
            return state
    }
}

export default todoReducer