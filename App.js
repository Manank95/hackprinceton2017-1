import React, { Component } from 'react';
import { TouchableHighlight, Image, Alert, Button, AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOq8l8BuXTlFLKu4UL-JxDApBMydeOJ7Q",
    authDomain: "tabs-377bd.firebaseapp.com",
    databaseURL: "https:\//tabs-377bd.firebaseio.com",
    projectId: "tabs-377bd",
    storageBucket: "tabs-377bd.appspot.com",
    messagingSenderId: "201277294910"
};
const firebaseApp = firebase.initializeApp(config);


export default class MainView extends Component {
  
  render() {
    let landingPic = {
    uri: 'http://i63.tinypic.com/34zerso.jpg'
    };
    
    return (
      <View style ={styles.container}>
      <View style={styles.landingPage}>
      <Image source={landingPic} style={{width: 200, height: 129}}/>
      <Text> </Text>
      <Text style={styles.headers}>Tabs</Text>
      <Text> </Text>
     <TouchableHighlight onPress={() => { Alert.alert('You tapped the button!')}} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in / Sign up</Text>
          </View>
        </TouchableHighlight>

       
      </View>
      </View> // end of main container
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
  },

  landingPage: {
    paddingTop: 175,
    alignItems: 'center',
  },

  headers: {
    fontSize: 24,
    fontWeight: 'bold',
  },


    button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    padding: 15,
    color: 'white'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
