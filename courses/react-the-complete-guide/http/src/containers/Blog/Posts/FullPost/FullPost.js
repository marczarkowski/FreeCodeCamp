import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      loadedPost: {
        id: "",
        title: "",
        content: ""
      }
    };
  }
  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (this.state.loadedPost.id != this.props.match.params.id)
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then(({ data, status }) => {
            if (status === 200) {
              console.log(data);
              this.setState({
                loadedPost: {
                  id: data.id,
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
      .delete(`/posts/${this.props.match.params.id}`)
      .then(response => console.log(response));
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.match.params.id) {
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
