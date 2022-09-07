import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="boxa">
          <div className="column">
            <img
              className="logo"
              src="/assets/logo.svg"
              height="100px"
              width="200px"
            />
            <h1>Coming very soon!</h1>
            <h3>
              We just have a few kinks to work out before our game can stay live
              around the clock.
            </h3>
            <h2>Here's a preview in the meantime:</h2>
            <h3>
              github:{" "}
              <a href="https://github.com/Scribble-Me-This/2022-Scribble-Me-This">
                https://github.com/Scribble-Me-This/2022-Scribble-Me-This
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
