import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;

// This line imports the combineReducers function from the Redux library.
// This function is used to combine multiple reducers into a single reducer function.
// This code creates a root reducer by using combineReducers. It takes an object as an argument


// The rootReducer in the provided code is a function.
// The combineReducers function is used to combine multiple reducer functions into a single reducer function that can manage different slices of the overall state.