import React, { Component } from 'react';
import { ScrollView, TextInput, TouchableHighlight, Image, Alert, Button, AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://10.24.206.70:3000/websocket';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
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
    componentWillMount() {
	Meteor.connect(SERVER_URL);
    }

static navigationOptions = {
header: null,
};
  

render() {

  let loginPic = {
    uri: 'http://i66.tinypic.com/iva5ao.jpg'
  };

   const { navigate } = this.props.navigation;
   return (
     <ScrollView centerContent={true}>
         <View style ={styles.container}>
         <View style={{alignItems:'center', paddingTop:20, paddingBottom:30}}>
         <Image source={loginPic} style={{width: 43, height: 40}}/>
         </View>

        <Text style = {styles.subheading}>Enter your username and password to sign in or create an account</Text>
        <Text style = {{paddingTop:20}}> Username </Text>
       <TextInput
          style={{height: 40}}
          placeholder="your-username"
          onChangeText={(text) => this.setState({text})}
        />

      <Text style={{paddingTop:5}}></Text>
        <Text>Password</Text>

       <TextInput secureTextEntry={true}
          style={{height: 40}}
          placeholder="your-password"
          onChangeText={(text) => this.setState({text})}
        />
      <View style={{paddingTop:30, alignItems: 'center'}}>
        <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
          </TouchableHighlight>
          <Text style={{paddingTop:2}}></Text>
           <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={styles.buttonSecondary}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
          </TouchableHighlight>
      <Text style={{paddingBottom:5}}></Text>
      </View>
      </View>
    </ScrollView>
   );
}
}

class HomeScreen extends React.Component {
    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }

   const { navigate } = this.props.navigation;

  static navigationOptions = {
  	title: 'Welcome Back!',
    headerLeft: <Button onPress={() => navigate('Welcome')}
    title="Add Friend"/>,
    headerRight: <Button onPress={() => { Alert.alert('You tapped the button!')}}
    title="Add Friend"/>
  	title: 'Username',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={{paddingBottom:10}}>
        <TouchableHighlight onPress={() => navigate('Add')} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Add Friends</Text>
              </View>
          </TouchableHighlight>  
      </View>
      </View>
    );
  }
}

class AddFriends extends React.Component {
    componentWillMount() {
        Meteor.connect(SERVER_URL);
    }
	static navigationOptions = {
		title: 'Add Friends'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
		 <View style ={{paddingTop:15, paddingBottom:15}}>
         <Text style = {styles.subheading}>Enter username</Text>
         <TextInput
           style={{height: 40, textAlign: 'center'}}
           placeholder="friends-username"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{paddingBottom:15}}></Text>
         <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Add Friends</Text>
              </View>
          </TouchableHighlight>  
         </View>
		);
	}
}


const TabsApp = StackNavigator({
  Welcome: 	{screen: WelcomeScreen},
  Login: 	  {screen: LoginScreen},
  Home:   	{screen: HomeScreen},
  Add: 	  	{screen: AddFriends}},

  {
  	cardStyle: {backgroundColor: 'white'}
  }
);

export default class App extends React.Component {
  render() {
    return <TabsApp />;
  }
}

const styles = StyleSheet.create({

  containerLanding: {
   flex: 1,
    justifyContent: 'center',
   alignItems: 'center',
  },

  container: {
   flex: 1,
   padding: 20,
   paddingTop: 22,
   justifyContent: 'center',
  },

  landingPage: {
    alignItems: 'center',
  },

  headers: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

   buttonSecondary: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#8DC63F'
  },

  buttonText: {
    padding: 15,
    color: 'white',
    textAlign: 'center'
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
