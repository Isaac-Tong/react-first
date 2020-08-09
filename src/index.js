//React and ReactDOM
const React = require("react");
const ReactDOM = require("react-dom");
const Comment = require("./Comment");
const ApprovalCard = require("./ApprovalCard");

//React Component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment name="Sam" time="Janurary 4" text="Dummy text1" />
            </ApprovalCard>
            <Comment name="Jack" time="Janurary 9" text="Dummy text2" />
            <Comment name="Jane" time="Janurary 10" text="Dummy text2" />
        </div>
    );
};

//Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
