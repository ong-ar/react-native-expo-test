import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationScreenProp,
} from 'react-navigation'; // Version can be specified in package.json

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

class HomeScreen extends React.Component<IProps> {
  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component<IProps> {
  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ProfileDetails')}
        />
      </View>
    );
  }
}

class ProfileDetailsScreen extends React.Component {
  public render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Details Screen</Text>
      </View>
    );
  }
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    ProfileDetails: ProfileDetailsScreen,
  },
  {
    initialRouteName: 'Profile',
  },
);

const HomeStack = createStackNavigator(
  {
    Details: DetailsScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileStack,
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  public render() {
    return <AppContainer />;
  }
}
