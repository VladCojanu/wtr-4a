import React from "react";
import MapView from 'react-native-maps'

class GoogleMapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <MapView
        provider={"google"}
        style={{ flex: 1 }}
        camera={{
          center: {
            latitude: -33.86,
            longitude: 151.20
          },
          heading: 1,
          pitch: 1,
          zoom: 6
        }}
      />
    )
  }
}

export default GoogleMapScreen;