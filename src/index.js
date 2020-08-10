//React and ReactDOM
const React = require("react");
const ReactDOM = require("react-dom");
const Seasons = require('./Seasons');
const Spinner = require('./Spinner');

class App extends React.Component {
    // //First function called when new object is created
    // constructor(props) {
    //     super(props);
        
    //     //First way to initialize state
    //     this.state = {
    //         lat: null,
    //         errorMessage: null,
    //     };
    // }

    //Alternate way to initialize state
    state = {lat: null, errorMessage: ''};

    //Called when component has loaded onto screen
    //Good place to load data
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                });
            },
            (error) => {
                this.setState({
                    errorMessage: error.message,
                });
            }
        );
    }

    //Called when state changes
    //Good place to data-load when state change
    componentDidUpdate() {
        console.log('rerendered');
    }

    // Called before disposing component
    componentWillUnmount() {

    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {

            return <p>Error: {this.state.errorMessage}</p>;

        } else if (!this.state.errorMessage && this.state.lat) {

            return <Seasons lat={this.state.lat}></Seasons>

        } else if (!this.state.errorMessage && !this.state.lat) {

            return <Spinner message="Please accept location request"></Spinner>
        }
    }

    //Must have render method
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

//Show react component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
