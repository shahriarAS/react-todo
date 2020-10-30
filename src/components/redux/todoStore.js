import { createStore } from "redux";
import todoReducer from "./todoReducer";
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(todoReducer, composeWithDevTools())

export default store