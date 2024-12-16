import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateAccount from '../screens/CreateAccountScreen';
import LoginScreen from '../screens/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
    {/* <Stack.Navigator initialRouteName={CreateAccount}> */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="Signup"
        component={CreateAccount}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
