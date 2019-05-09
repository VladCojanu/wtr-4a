import React from "react"
import { View, Text } from "react-native";

class TimerScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cs: 0,
      seconds: 0
    }

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(()=> this.updateState(), 10)
  }

  updateState() {
    this.setState((prevState) => ({
      cs: prevState.cs + 1,
      seconds:  Math.floor((prevState.cs + 1) / 100)
    }))
  }

  render() {
    return (<View>
            <Text>{this.state.seconds}:{this.state.cs % 100}</Text>
        </View>)
  }

  // TODO: Add timer functions
}

export default TimerScreen;