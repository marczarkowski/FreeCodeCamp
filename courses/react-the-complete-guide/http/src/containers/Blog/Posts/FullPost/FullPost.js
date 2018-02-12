import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      loadedPost: {
        title: "",
        content: ""
      }
    };
  }
  componentDidUpdate({ id: prevId }) {
    if (prevId !== this.props.id) {
      axios
        .get(`/posts/${this.props.id}`)
        .then(({ data, status }) => {
          if (status === 200) {
            this.setState({
              loadedPost: {
                title: data.title,
                content: data.body
              }
            });
          }
        });
    }
  }

  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.id}`)
      .then(response => console.log(response))
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.content}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
