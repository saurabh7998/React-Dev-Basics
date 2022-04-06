import React from "react";
import faker from '@faker-js/faker';

const CommentDetails = () => {
    return (
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
    );
};

export default CommentDetails;