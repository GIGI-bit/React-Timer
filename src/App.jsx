import React from "react";
import CurrentTime from "./components/CurrentTime";
import Timer from "./components/Timer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Time Tracker and Timer</h1>
        <CurrentTime />
        <Timer />
      </div>
    );
  }
}

export default App;
