import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// REDUCERS
import { todoReducer} from "./todo.reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  todo: todoReducer,
});

const middleware = [logger, thunk];

const store = createStore(reducer, {},
  composeWithDevTools(applyMiddleware(...middleware)));

export default store;
