import { StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home'
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

const Navigator = createAppContainer(appStackNavigator);

export default Navigator;
