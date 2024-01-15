import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {

  const myState = useSelector( (state) => state.changeTheNumber );

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title='Decrement' onClick={ () => dispatch(decNumber()) } ><span>-</span></a>
          <input name='quantity' type="text" className="quantity__input" value={myState} />
          <a className="quantity__plus" title='Increment' onClick={ () => dispatch(incNumber(5)) } ><span>+</span></a>
        </div>

      </div>
    </>
  )
}

export default App


// useSelector: It is a hook provided by React-Redux that allows a React component to extract data from the Redux store state.

// useSelector: This is a hook provided by React Redux. It allows you to extract data from the Redux store state in your functional components.

// (state) => state.changeTheNumber: This is an arrow function that takes the entire Redux state as a parameter and returns the specific piece of state you are interested in. In this case, it's extracting the value of changeTheNumber from the Redux store.

// state represents the entire Redux state.

// state.changeTheNumber is assumed to be a property in your Redux store, and this line is accessing its value.

// const myState = ...: The result of useSelector is assigned to the variable myState. Now, myState holds the current value of the changeTheNumber property from the Redux store.

// useDispatch is used to dispatch actions to the Redux store.


// const dispatch = useDispatch();
// This line initializes the dispatch function by calling the useDispatch hook. The dispatch function is a way to send actions to the Redux store.



{/* <a className="quantity__plus" title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a> */}
// The onClick event is set to an arrow function that dispatches the incNumber action using the dispatch function obtained from the useDispatch hook.

// The incNumber action is likely an action creator that returns an action object with a type of 'INCREMENT' or similar. This action is then processed by the Redux store to update the state.