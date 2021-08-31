import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen  from './screens/homescreen';
import IssLocationScreen from './screens/isslocationscreen';
import MeteorScreen from './screens/meteorscreen';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateScreen from './screens/updateScreen'

const Stack=createStackNavigator()
export default function App() {
  return (
<NavigationContainer> 
 <Stack.Navigator initialRouteName="home" screenOptions={{
     headerShown:false
 }}>
     <Stack.Screen name="home" component={Homescreen} />
     <Stack.Screen name="IssLocation" component={IssLocationScreen} />
     <Stack.Screen name="Meteor" component={MeteorScreen} />
     <Stack.Screen name="Update" component={UpdateScreen} />

     </Stack.Navigator>    
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
