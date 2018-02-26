import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  render() {
    const { id } = { ...this.props.match.params };
    console.log(this.props);
    const searchParams = new URLSearchParams(this.props.location.search);
    let title;
    for (let param of searchParams.entries()) {
      if (param[0] === "title") {
        title = param[1]; // [[refactor-destrukturyzacja]]
      }
    }
    console.log(title);
    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {id}</p>
      </div>
    );
  }
}

export default withRouter(Course);
