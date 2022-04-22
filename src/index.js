// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>Hi there!</div>
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
)