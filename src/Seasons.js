const React = require('react');

const Seasons = (props) => {
    console.log(props);
    return (
    <div>Lattitude: {props.lat}</div>
    )
}

module.exports = Seasons;