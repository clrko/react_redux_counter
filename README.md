# React_redux_challenge

This repository contains an exercise to learn Redux with React. I have migrated the counter created with vanilla JS and Redux (available [here](https://github.com/clrko/js_redux_counter)).

## Run the app in the development mode.

`npm install`
`npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Main Process

### Installing React Redux

1. Create React app `npx create-react-app appname` 
2. `npm install react-redux`
3. `npm i redux`
4. Installed the [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)
5. Set up the index.js file:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './counterReducer'
import App from './App';

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
```

6. Create the Reducer

```
//counterReducer.js
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_1':
            return state + 1;
        case 'REMOVE_1':
            return state - 1;
        case 'ADD_10':
            return state + 10;
        case 'REMOVE_10':
            return state - 10;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}
export default counterReducer;
```

### Display the value of the state in the component

1. Create a counterContainer.js file in which a CounterComponent will be connected to the store via the connect method of react-redux : 

```
//counterContainer.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});
const CounterComponent = ({ counter }) => (
    <div>
      {counter}
    </div>
);
export default connect(mapStateToProps)(CounterComponent);

```

2. Import this component into App.js

```
import React from 'react';
import CounterComponent from './counterContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterComponent />
    </div>
  );
}

export default App;
```

### Modify the value of the state

We cannot directly modify the data stored in Redux store. We need to use actions that will be dispatched to the store. We want to dispatch the actions ADD_1, REMOVE_1 etc when the related button is clicked on. 

```
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});
const CounterComponent = ({ counter, dispatch}) => (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'ADD_1' })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_1' })}>
        Remove 1
      </button>
      <button onClick={() => dispatch({ type: 'ADD_10' })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_10' })}>
        Remove 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
);
export default connect(mapStateToProps)(CounterComponent);
```
