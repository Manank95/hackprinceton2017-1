import React, { Component } from 'react';
import { TextInput, TouchableHighlight, Image, Alert, Button, AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    let landingPic = {
      uri: 'http://i63.tinypic.com/34zerso.jpg'
    };
    const { navigate } = this.props.navigation;
  
        return (
          <View style ={styles.containerLanding}>
          <View style={styles.landingPage}>
          <Image source={landingPic} style={{width: 200, height: 129}}/>
          <Text> </Text>
          <Text style={styles.headers}>Tabs</Text>
          <Text> </Text>
        <TouchableHighlight onPress={() => navigate('Login')} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign in / Sign up</Text>
              </View>
          </TouchableHighlight>    
          </View>
          </View>
    );
    }
}

class LoginScreen extends React.Component {
static navigationOptions = {
  title: 'Sign in or Sign Up',
}
render() {
   let landingPic = {
      uri: 'http://i63.tinypic.com/34zerso.jpg'
    };
   const { navigate } = this.props.navigation;
   return (
         <View style ={styles.container}>
        <Text style = {{paddingTop:60}}></Text>
        <View style={{alignItems:'center'}}>
         <Image source={landingPic} style={styles.mainImage}/>
         </View>
        <Text style = {{paddingTop:20}}></Text>
        <Text style = {styles.subheading}>Enter your username and password to sign in or create an account</Text>
        <Text style = {{paddingTop:20}}> Username </Text>
         <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={"hi"}
      />
        <Text>Password</Text>   
         <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={"hi"}
      /> 
      <View style={{paddingTop:10, alignItems: 'center'}}>
        <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign in / Sign up</Text>
              </View>
          </TouchableHighlight>  
      </View>
      </View>
   );
}
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Back!',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>No running tabs.</Text>
      </View>
    );
  }
}


const TabsApp = StackNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen},
  Home:   { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return <TabsApp />;
  }
}

const styles = StyleSheet.create({
  
  containerLanding: {
   flex: 1,
   padding: 20,
   paddingTop: 22,
   alignItems: 'center',
  },

  container: {
   flex: 1,
   padding: 20,
   paddingTop: 22,
  },

  landingPage: {
    paddingTop: 175,
    alignItems: 'center',
  },

  headers: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subheading: {
    fontSize: 18,
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
  mainImage: {
  width: 200,
  height: 129,
  alignItems: 'center',
   },
})