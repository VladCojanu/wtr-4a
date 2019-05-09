import React from "react";
import { View, Button } from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          rounded
          title="Timer"
          onPress={() =>
            navigate("Timer")
          }
        />
        <Button
          rounded
          title="Map"
          onPress={() =>
            navigate("GoogleMap")
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
