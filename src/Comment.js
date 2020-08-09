const React = require("react");
const faker = require("faker");

const Comment = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.name}
            </a>
            <div className="metadata">Posted Feburary 4th</div>
        </div>
        <div className="text">Nice blog post!</div>
    </div>
    );
};

module.exports = Comment;
