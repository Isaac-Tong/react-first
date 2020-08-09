//React and ReactDOM
const React = require("react");
const ReactDOM = require("react-dom");


//React Component
// const App = () => {
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//             console.log(position);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
//     return (
//         <div>
//             Hello
//         </div>
//     );
// };
class App extends React.Component {
    render() {
        return <div>Lattitude</div>
    }
}

//Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
