
//import React, { useState } from 'react';
import * as React from 'react';
import {StyleSheet,View,Text,TextInput,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginManager } from "react-native-fbsdk";
import database from '@react-native-firebase/database';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Blood Bank App</Text>

     <Image source={require('./assets/images/blood.png')}
   style={{width:100,height:100,resizeMode:'contain',marginBottom:5}}
  />

      <Button 
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        
      />
      

<Button

        title="Register To Donate"
        onPress={() => navigation.navigate('DonorReg')}
      />
    </View>
  );
}

const fb_Login=()=>{
  LoginManager.logInWithPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        
       
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );

}

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button onPress={fb_Login} title="Login with Facebook"/>
    </View>
  );
}

// const[email,setemail]=useState("");
//   const[password,setpassword]=useState("");
//   const save_data=()=>
// {
//   let donor = {
//     email,
//     password
//   }
//   database().ref('/').child('Donors').push(donor)

// }


function DonorReg() {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registration here</Text>

        <TextInput
           style={styles.inputStyle}
           placeholder="Email"
          // value={email}
          // onChangeText={(text)=>setemail(text)}
       />
         <TextInput
           style={styles.inputStyle}
           placeholder="Password"
          // value={password}
          // onChangeText={(text)=>setpassword(text)}
           secureTextEntry={true}
           
           maxLength={15}
         />   
         <Button
           color="#3740FE"
           title="Register"
          //  onPress={save_data}
        />   

          </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DonorReg" component={DonorReg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
 
});

export default App;


