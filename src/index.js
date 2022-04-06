import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetails from "./CommentDetails";

// In the below code, we can clearly observe that we are writing a lot of duplicate code 
// to render each new comment which essentially has the same design.

const App = () => {
    return (
        <div className="ui container comments">
            {/* First Comment */}
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
        </div>

            
    );
};

ReactDOM.render(<App /> , document.querySelector('#root'));