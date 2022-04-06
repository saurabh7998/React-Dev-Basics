import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

// In the below code, we can clearly observe that we are writing a lot of duplicate code 
// to render each new comment which essentially has the same design.

const App = () => {
    return (
        <div className="ui container comments">
            {/* First Comment */}
            <ApprovalCard>
                <CommentDetails author = "Saurabh" 
                    time ="Today at 4:00 pm" 
                    image = {faker.image.image()}
                    content = "Hello Guys!! What's up?"
                />
            </ApprovalCard>

            {/* Second Comment */}
            <ApprovalCard>
                <CommentDetails author = "Aneesh" 
                    time ="Today at 4:30 pm" 
                    image = {faker.image.image()}
                    content = "Nothing much, wbu?"
                />
            </ApprovalCard>

            {/* Third Comment */}
            <ApprovalCard>
                <CommentDetails author = "Devendra" 
                    time ="Today at 5:00 pm" 
                    image = {faker.image.image()}
                    content = "Let's meet this weekend!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <h4>Warning</h4>
                <div>Are you sure you want to continue?</div>
            </ApprovalCard>
        </div>

            
    );
};

ReactDOM.render(<App /> , document.querySelector('#root'));