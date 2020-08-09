//React and ReactDOM
const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {

    //First function called when new object is created 
    constructor(props){
        super(props);
        this.state = {
            lat: null,
        };
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (error) => {
                console.log(error);
            }
        );
    }


    //Must have render method
    render() {
        return <div>Lattitude: {this.state.lat} </div>;
    }
}

//Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
