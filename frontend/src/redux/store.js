import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer, notesReducer } from "./reducers/noteReducers";

const reducer = combineReducers({
  notes: notesReducer,
  note: noteReducer
});

const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;