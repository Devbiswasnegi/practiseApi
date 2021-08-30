import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FileOne from './src/FileOne';
import {Provider} from 'react-redux';
import {store} from './src/store';


const Stack = createStackNavigator();
const app = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="FileOne" component={FileOne} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default app;
