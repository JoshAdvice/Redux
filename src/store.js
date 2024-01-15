import { createStore } from "redux";

import rootReducer from "./reducers/index.js";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// This line imports the createStore function from the "redux" library.

// const store = createStore(rootReducer);: This line creates a Redux store using the createStore function. The createStore function takes the root reducer as an argument. The store is the object that holds the complete state tree of your application. It has methods for interacting with the state, such as dispatch to dispatch actions and getState to get the current state.