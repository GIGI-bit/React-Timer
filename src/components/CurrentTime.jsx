import React from "react";

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    console.log("CurrentTime: componentDidMount");
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("CurrentTime: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CurrentTime: componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.currentTime}</h2>
      </div>
    );
  }
}

export default CurrentTime;
