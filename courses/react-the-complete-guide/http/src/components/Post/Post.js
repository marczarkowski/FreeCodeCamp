import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

const post = ({ title, author, handleClick, match }) => {
  console.log(match);
  return (
    <article className="Post" onClick={handleClick}>
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  );
};

export default withRouter(post);
