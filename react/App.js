import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen'
import TimerScreen from './TimerScreen'
import GoogleMapScreen from './GoogleMapScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Timer: { screen: TimerScreen },
  GoogleMap: { screen: GoogleMapScreen }
});

const App = createAppContainer(MainNavigator);

export default App;