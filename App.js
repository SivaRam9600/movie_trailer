





import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
// import { createStackNavigator } from '@react-navigation/stack';
''
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Details from './Pages/DetailsPage';
import Delete from './Pages/Delete';
import ViewPage from './Pages/ViewPage';


import {
  Text,
  View,
  Dimensions,
  Alert,
  BackHandler,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  Image
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
}

  componentDidMount = async () => {


    const result =  AsyncStorage.getItem('Login');

    console.log('result',result);

    if(result !='true'){

      this.props.navigation.navigate('HomePage');
      Toast.show('Login Successful');

    }


  };

  componentWillUnmount() {

  }


  render() {



    return (

      // <View>
      //   <Text>This is an App.tsx</Text>
      // </View>

      // <GestureHandlerRootView>

      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Login">
      //     <Stack.Screen name="Login" component={Login} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      // </GestureHandlerRootView>


      <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="default" />


        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Delete" component={Delete} />
            <Stack.Screen name="ViewPage" component={ViewPage} />

            
    
          </Stack.Navigator>
        </NavigationContainer>
      
    </GestureHandlerRootView>


    );
  }
}





const styles = StyleSheet.create({

  

 
});













