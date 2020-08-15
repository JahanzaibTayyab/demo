import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Screens/SignIn';
import Home from '../Screens/Home';
import AhCard from '../Screens/ViewCards';
import Check from '../Screens/Check';
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignIn'}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Check" component={Check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
