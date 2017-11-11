import React, { Component } from 'react';
import { ScrollView, TextInput, TouchableHighlight, Image, Alert, Button, AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
static navigationOptions = {
  title: 'Sign in or Sign Up',
}
  
render() {
   const { navigate } = this.props.navigation;
   return (
         <View style ={styles.container}>
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
                <Text style={styles.buttonText}>Sign in</Text>
              </View>
          </TouchableHighlight>  
          <Text style={{paddingTop:2}}></Text>
           <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
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

class AddFriends extends React.Component {
	static navigationOptions = {
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>Enter your friend's username</Text>
			</View>
		);
	}
}


const TabsApp = StackNavigator({
  Welcome: 	{screen: WelcomeScreen},
  Login: 	{screen: LoginScreen},
  Home:   	{screen: HomeScreen},
  Add: 		{screen: AddFriends}},

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
  },
    button: {
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