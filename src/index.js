import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

import { Provider } from 'react-redux';


store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// store.subscribe(callback): The subscribe method is a part of the Redux store, and it allows you to add a change listener. The provided callback function will be called any time an action is dispatched and the state in the store is updated.

// () => console.log(store.getState()): This is an arrow function that serves as the callback passed to subscribe. Inside this function, it logs the current state of the Redux store using store.getState() to the console.


// import { Provider } from 'react-redux';
// This line imports the Provider component from the 'react-redux' library. The Provider component is a part of the React Redux library, which is used to integrate Redux with React applications.

