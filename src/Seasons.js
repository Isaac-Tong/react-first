const React = require("react");
require('./Seasons.css')

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        if (lat > 0) {
            return "Hit the beach!";
        }
        return "It's chilly!";
    } else {
        if (lat > 0) {
            return "It's chilly!";
        }
        return "Hit the beach!";
    }
};

const Seasons = (props) => {
    const phrase = getSeason(props.lat, new Date().getMonth());
    let Icon = 'snowflake';
    let Season = 'winter'
    if(phrase === 'Hit the beach!'){
        Icon = 'sun'
        Season = 'summer'
    }
    return (
        <div className={`season-display ${Season}`}>
            <i className={`icon-left icon massive ${Icon}`}></i>
            <h1>{Season}</h1>
            <i className={`icon-right icon massive ${Icon}`}></i>
        </div>
    );
};

module.exports = Seasons;
