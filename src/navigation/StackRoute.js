import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import StartNow from '../screens/StartNow';
import Rules from '../screens/Rules';
import CharacterSelect from '../screens/CharacterSelect';
import MatchScreen from '../screens/MatchScreen';
import Result from '../screens/Result';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="StartNow"
          component={StartNow}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name="Rules"
          component={Rules}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="CharacterSelect"
          component={CharacterSelect}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="MatchScreen"
          component={MatchScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />

        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
