//React and ReactDOM
const React = require('react');
const ReactDOM = require('react-dom');

//React Component
const App = () => {

    const buttonText = 'You Should'

    return (
        <div className="">
            <button style={{backgroundColor: 'red', }}>
                {buttonText}
            </button>
        </div>
    ) 
}

//Show react component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);