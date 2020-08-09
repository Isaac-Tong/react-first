//React and ReactDOM
const React = require("react");
const ReactDOM = require("react-dom");
const Comment = require('./Comment');

//React Component
const App = () => {
    return (
        <div className="ui container comments">
            <Comment name="Sam"/>
            <Comment name="Jack"/>
            <Comment name="Jane"/>
        </div>
    );
};

//Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
