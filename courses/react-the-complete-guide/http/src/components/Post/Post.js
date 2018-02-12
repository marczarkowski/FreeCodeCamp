import React from 'react';

import './Post.css';

const post = ({title, author, handleClick}) => (
    <article className="Post" onClick={handleClick}>
        <h1>{title}</h1>
        <div className="Info">
            <div className="Author">{author}</div>
        </div>
    </article>
);

export default post;
