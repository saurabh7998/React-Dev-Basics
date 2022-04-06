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
            <CommentDetails author = "Saurabh" 
                time ="Today at 4:00 pm" 
                image = {faker.image.image()}
                content = "Hello Guys!! What's up?"
            />
            <CommentDetails author = "Aneesh" 
                time ="Today at 4:30 pm" 
                image = {faker.image.image()}
                content = "Nothing much, wbu?"
            />
            <CommentDetails author = "Devendra" 
                time ="Today at 5:00 pm" 
                image = {faker.image.image()}
                content = "Let's meet this weekend!"
            />
        </div>

            
    );
};

ReactDOM.render(<App /> , document.querySelector('#root'));