import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { music } from "../PadSoundTest";
import "../css/main.scss";

export default class ButtonPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({});
  };
  render() {
    if (music.length < 4) {
      return <div></div>;
    } else {
      return (
        <div className=' buttonStyle'>
          <form onSubmit={this.handleSubmit}>
            <input
              class="mt-4 mb-2 pl-2 pr-2 input-group"
              onChange={this.handleChange}
              type="text"
              placeholder="your title goes here"
            />

            <div>
              <textarea
                className="mt-4 mb-2 pl-2 pb-4 pr-2 input-group "
                onChange={(event) => {
                  this.setState({
                    description: event.target.value,
                  });
                }}
                placeholder="and the description goes here"
              />
            </div>
            <Container>
              <div className='text-center'>

            <button  className="btn btn-success" type="submit">
              Post Your Song
            </button>
              </div>
            </Container>
          </form>
          <p>{this.state.title}</p>
          <p>{(music, this.state.description)}</p>
        </div>
      );
    }
  }
}
