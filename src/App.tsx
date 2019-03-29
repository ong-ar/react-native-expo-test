import { AppAuth } from 'expo';
import * as React from 'react';
import { Button, View, Text } from 'react-native';

const config = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  /* This is the CLIENT_ID generated from a Firebase project */
  clientId: '1060901720488-geiu82asq8t9395af8tudcqnl4t782d7.apps.googleusercontent.com',
  redirectUrl: 'http://localhost',
};

async function signInAsync() {
  const authState = await AppAuth.authAsync(config);
  console.log('signInAsync', authState);
  return authState;
}

const AppContainer = () => <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>ddddd</Text><Button onPress={signInAsync} title="dddd" /></View>;

export default class App extends React.Component {
  public render() {
    return <AppContainer />;
  }
}
