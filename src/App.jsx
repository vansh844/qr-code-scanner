/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Scanner from './components/Scanner';
import React, { Component } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  Appearance,
  View,
} from 'react-native';


export default class App extends Component{
  state = {
    view : 0,
  }
  onPress = () =>{
    newView = this.state.view == 0 ? 1 : 0 
    this.setState({
      view : newView
    })
  }

  render(){
    const colorScheme = Appearance.getColorScheme() === "light" ? stylesLight : stylesDark
    let viewToRender = (
      <View style={[stylesPositioning.centered, colorScheme.backgroundColor]}>
        <Pressable
          style = {[stylesPositioning.button, colorScheme.buttonColor]}
          onPress={this.onPress}
        >
          <Text style={[stylesPositioning.text, colorScheme.text]}>start scanning!</Text>
        </Pressable>
      </View>
    )
    if(this.state.view == 1){
      viewToRender = <Scanner theme={colorScheme}></Scanner>
    }
    return viewToRender
  }
}

const stylesPositioning = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 10
    
  },
  text: {
    fontSize: 20,
  }
});


const stylesLight = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#ffffff",
  },
  buttonColor: {
    backgroundColor: "#fff1f1",
  },
  text: {
    color: "#151718"
  }
});

const stylesDark = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#20242b",
  },
  buttonColor: {
    backgroundColor: "#151718",
    
  },
  text: {
    color: "#fff1f1"
  }
});