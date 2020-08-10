const React = require("react");

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text">{props.message}</div>
        </div>
    );
};

Spinner.defaultProps={
    message: 'Loading...'
}


module.exports = Spinner;
