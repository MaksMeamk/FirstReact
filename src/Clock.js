import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  tick() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>What time is it?{this.state.time.toLocaleTimeString()} </div>;
  }
}
export default Clock;
