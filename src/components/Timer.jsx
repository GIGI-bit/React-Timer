import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: "",
      countdown: null,
      message: "",
    };
  }

  componentDidMount() {
    console.log("Timer: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Timer: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Timer: componentWillUnmount");
    clearInterval(this.countdownInterval);
  }

  handleInputChange = (e) => {
    this.setState({ timerValue: e.target.value });
  };

  startTimer = () => {
    if (this.state.timerValue && !isNaN(this.state.timerValue)) {
      this.setState({
        countdown: parseInt(this.state.timerValue, 10),
        message: "",
      });
      this.countdownInterval = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.countdown > 0) {
            return { countdown: prevState.countdown - 1 };
          } else {
            clearInterval(this.countdownInterval);
            return { countdown: null, message: "Time's up!" };
          }
        });
      }, 1000);
    }
  };

  resetTimer = () => {
    clearInterval(this.countdownInterval);
    this.setState({ timerValue: "", countdown: null, message: "" });
  };

  render() {
    return (
      <div>
        <h2>Countdown Timer</h2>
        <input
          type="text"
          value={this.state.timerValue}
          onChange={this.handleInputChange}
          placeholder="Enter seconds"
        />
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.resetTimer}>Reset</button>
        {this.state.countdown !== null && (
          <h3>Time Remaining: {this.state.countdown}s</h3>
        )}
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default Timer;
