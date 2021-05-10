import React from "react";
import { Component } from "react";

export default class ButtonPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      tempTitle: "",
      setTitle: "",
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => {
      if (state.clicked == true) {
        return { clicked: false };
      } else {
        return { clicked: true };
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    if (this.state.clicked) {
      //visible
      return (
        <div className="mt-2">
          <button
            onClick={this.toggleVisibility}
            className="btn-block btn btn-primary"
          >
            post
          </button>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="defaultTitle"
              className="form-control mt-4 mb-1"
            />
            <div></div>
            <button type="submit" className="btn btn-block mt-2 btn-warning">
              set title
            </button>
          </form>
        </div>
      );
      //invisible
    } else {
      return (
        <div className="mt-2">
          <button
            onClick={this.toggleVisibility}
            className="btn-block btn btn-primary"
          >
            post
          </button>
        </div>
      );
    }
  }
}
