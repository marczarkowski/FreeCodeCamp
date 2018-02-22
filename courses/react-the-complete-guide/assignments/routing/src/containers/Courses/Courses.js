import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ],
    courseSelected: false
  };

  componentWillReceiveProps({ location: { pathname: nextPath } }) {
    const { pathname: currentPath } = this.props.location;
    if (currentPath.length > nextPath.length) {
      this.setState({ courseSelected: false });
    }
  }

  courseSelectedHandler = (id, title) => {
    this.props.history.push(`/${this.props.match.url}/:${id}?title=${title}`);
    this.setState({ courseSelected: true });
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {!this.state.courseSelected &&
            this.state.courses.map(course => {
              return (
                <Link
                  to={{
                    pathname: `/courses/${course.id}`,
                    search: `?title=${course.title}`
                  }}
                  onClick={() =>
                    this.courseSelectedHandler(course.id, course.title)
                  }
                  key={course.id}
                >
                  <article className="Course">{course.title}</article>
                </Link>
              );
            })}
          <Route
            path={`${this.props.match.url}/:id`}
            component={Course}
            exact
          />
        </section>
      </div>
    );
  }
}

export default Courses;
