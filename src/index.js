// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.querySelector('#root'));


const testMe = () => {
    return 'blah!'
}
// create a react component
const App = () => {
    const buttonText = testMe();
    return (
        <div>
        <label className="label" htmlFor="name">Enter Name</label>
        <input id="name"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText}
        </button>
    </div>
    );
}

// take the react component and show it on the screen
root.render( <App /> )