import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null
    };
  }

  componentDidMount() {
    axios
      .get("/posts")
      .then(({ status, data: posts }) => {
        if (status === 200) {
          const updatedPosts = posts.slice(0, 4).map(post => ({
            ...post,
            author: "Marcin"
          }));
          this.setState({ posts: updatedPosts });
        }
      })
      .catch(err => console.log(err));
  }
  postSelectedHandler(id) {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        handleClick={() => this.postSelectedHandler(post.id)}
      />
    ));

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
{
  /*<section>*/
}
{
  /*<FullPost id={this.state.selectedPostId} />*/
}
{
  /*</section>*/
}
{
  /*<section>*/
}
{
  /*<NewPost />*/
}
{
  /*</section>*/
}
