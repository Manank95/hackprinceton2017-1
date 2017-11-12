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
          <Text></Text>
          <Text>Share IOUs with people close to you. </Text>
          <Text>Pay when you're ready—we'll keep the tabs for you.</Text>
          <Text></Text><Text></Text>
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
                <Text style={styles.buttonText}>Sign in</Text>
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
  static navigationOptions = {
    header: null,
  };

  render() {

    let homePic = {
      uri: 'http://i64.tinypic.com/nd37zl.jpg',
    };
    const { navigate } = this.props.navigation;
    return (
      <View>
      <View style={{paddingBottom:10, paddingTop:10}}>
       <View style ={{paddingTop:25, flexDirection: 'row', justifyContent: 'space-between'}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 18, paddingLeft:10, marginTop: 8}}>Sydney's Tabs</Text>
              </View>
          </TouchableHighlight>

        <Button style={{paddingRight:15}} title = "Log Out"  
        onPress={() => navigate('Welcome')}></Button>
        </View>

        <TouchableHighlight onPress={() => navigate('Add')} underlayColor="white">
              <View style={{backgroundColor: 'white'}}>
                <Text style={styles.friendText}>Tiffany Quon
                <Text style={styles.positiveTabText}>+$10.00</Text></Text>
              </View>
          </TouchableHighlight>  
      </View>

      <View style={{paddingBottom:10, paddingTop:10}}>
        <TouchableHighlight onPress={() => navigate('Add')} underlayColor="white">
              <View style={{backgroundColor: 'white'}}>
                <Text style={styles.friendText}>Owen Bulka
                <Text style={styles.negativeTabText}>-$42.00</Text></Text>
              </View>
          </TouchableHighlight>  
      </View>


        <View style={{paddingBottom:10}}>
        <TouchableHighlight onPress={() => navigate('Add')} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Add Friends</Text>
              </View>
          </TouchableHighlight>  
      </View>
      <View style ={{alignItems:'center',paddingTop:100}}>
       <Image source={homePic} style={{width: 203, height: 105}}/>
      </View>
      </View>
    );
  }
}

class AddFriends extends React.Component {
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
                <Text style={styles.buttonText}>Add Friend</Text>
              </View>
          </TouchableHighlight>  
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

  friendText: {
  	padding: 5,
  	paddingLeft: 15,
  	fontSize: 16,
  	color: 'black',
  	textAlign: 'left',
  	fontWeight: 'bold'
  },

  positiveTabText: {
  	padding: 5,
  	paddingRight: 15,
  	fontSize: 16,
  	color: '#8DC63F',
  	textAlign: 'right',
  	fontWeight: 'bold'
  },

  negativeTabText: {
  	padding: 5,
  	paddingRight: 15,
  	fontSize: 16,
  	color: '#DC143C',
  	textAlign: 'right',
  	fontWeight: 'bold'
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