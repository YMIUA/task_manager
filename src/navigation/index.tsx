import React from 'react';
import {observer, inject} from 'mobx-react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/auth/AuthScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = ({AppStore}) => {
  console.log(AppStore.isAuthorised);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AppStore.isAuthorised ? (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        ) : (
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default inject('AppStore')(observer(Navigation));
