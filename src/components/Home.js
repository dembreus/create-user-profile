import React, { Component, Fragment } from "react";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="home-img">
          {/*<img  src="https://media.giphy.com/media/BgMlatkFNbi2A/giphy.gif" alt="keyboard-gif"/>*/}
          <img
            className="img-fluid rounded mx-auto d-block"
            src="https://media1.tenor.com/images/5a5b26e19c0df8b4d602103c454dba80/tenor.gif?itemid=5177277"
            alt="computer-gif"
          />
        </div>
      </Fragment>
    );
  }
}
