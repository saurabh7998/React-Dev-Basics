import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';

// In the below code, we can clearly observe that we are writing a lot of duplicate code 
// to render each new comment which essentially has the same design.

const App = () => {
    return (
        <div className="ui container comments">
            {/* First Comment */}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Saurabh
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00 pm</span>
                        {/* Today at 7:00pm */}
                    </div>
                    <div className="text">
                        Nice post!
                    </div>
                </div>
            </div>

            {/* Second Comment */}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Saurabh
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00 pm</span>
                        {/* Today at 7:00pm */}
                    </div>
                    <div className="text">
                        Nice post!
                    </div>
                </div>
            </div>

            {/* Third Comment */}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Saurabh
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 7:00 pm</span>
                        {/* Today at 7:00pm */}
                    </div>
                    <div className="text">
                        Nice post!
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App /> , document.querySelector('#root'));