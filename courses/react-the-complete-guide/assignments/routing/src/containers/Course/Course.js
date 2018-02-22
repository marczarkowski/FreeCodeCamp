import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  render() {
    const { id } = { ...this.props.match.params };
    return (
      <div>
        <h1>_COURSE_TITLE_</h1>
        <p>You selected the Course with ID: {id}</p>
      </div>
    );
  }
}

export default withRouter(Course);
