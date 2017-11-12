import React, { Component } from 'react';
import { ScrollView, TextInput, TouchableHighlight, Image, Alert, Button, AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import DB = require('./DB.js');

var DBEvents = require('react-native-db-models').DBEvents

DBEvents.on("all", function(){ console.log("Database changed");  })


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
          <Text style = {{textAlign: 'center'}}>Share IOUs with people close to you.</Text>
          <Text style = {{textAlign: 'center'}}> Pay when you're ready—we'll track your tabs for you.</Text>
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
	state = {
		username: 'your username',
		password: 'your password',
	}

	add_user: function() {
		DB.users.add({usr: this.state.username, pass: this.state.password},, function(added_data){
			if(added_data){ navigate('Home'); }
		})
	}


static navigationOptions = {
header: null,
};

<<<<<<< HEAD
constructor() {
    super();
    this.state = {
        textValue: 'Change me'
    }
}
=======
>>>>>>> 9dcf4e2d18e5686add06028f1b0329736febe9d0
render() {

  let loginPic = {
    uri: 'http://i66.tinypic.com/iva5ao.jpg'
  };

   const { navigate } = this.props.navigation;
   return (
   

     <KeyboardAwareScrollView
     scrollEnabled={false}>
         <View style ={styles.container}>
         <View style={{alignItems:'center', justifyContent: 'center', paddingTop:65, paddingBottom:30}}>
         <Image source={loginPic} style={{width: 43, height: 40}}/>
         </View>

        <Text style = {styles.subheading}>Enter your username and password to sign in or create an account</Text>
        <Text style = {{paddingTop:20}}>Username </Text>
       <TextInput
          style={{height: 40}}
<<<<<<< HEAD
          placeholder="your-username"
          onChangeText={(text) => this.setState({textValue: text})}
=======
          placeholder=this.state.username
          onChangeText={(username) => this.setState({username})}
>>>>>>> 9dcf4e2d18e5686add06028f1b0329736febe9d0
        />

        <Text> {this.state.textValue} </Text>

      <Text style={{paddingTop:5}}></Text>
        <Text>Password</Text>

       <TextInput secureTextEntry={true}
          style={{height: 40}}
          placeholder=this.state.password
          onChangeText={(password) => this.setState({password})}
        />
      <View style={{paddingTop:30, alignItems: 'center'}}>
        <TouchableHighlight onPress={() => navigate('Home')} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign in</Text>
              </View>
          </TouchableHighlight>
          <Text style={{paddingTop:2}}></Text>
           <TouchableHighlight onPress={() => this.add_user} underlayColor="white">
              <View style={styles.buttonSecondary}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
          </TouchableHighlight>
      <Text style={{paddingBottom:5}}></Text>
      </View>
      </View>
    </KeyboardAwareScrollView>
   );
}
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
     let homePic = {
    uri: 'http://i68.tinypic.com/2hyffr7.jpg'
  };
    const { navigate } = this.props.navigation;
    return (
      <View>
      <View style={{paddingBottom:10, paddingTop:10}}>
       <View style ={{paddingTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 18, paddingLeft:10, marginTop: 9}}>My Tabs</Text>
              </View>
          </TouchableHighlight>

        <Button style={{paddingRight:15}} title = "Log Out"
        onPress={() => navigate('Welcome')}></Button>
        </View>

        </View>

		<View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3', borderBottomWidth: 1, borderTopWidth: 1}}>
             <TouchableHighlight onPress={() => navigate('Tab', {name: "Tiffany"})} underlayColor="white">
              <View>
                <Text style={styles.friendText}>Tiffany Quon</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight onPress={() => navigate('Tab', {name: "Tiffany"})} underlayColor="white">
              <View>
                <Text style={styles.positiveTabText}>+$5.32</Text>
              </View>
          	 </TouchableHighlight>
        </View>

        		<View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight onPress={() => navigate('Tab', {name: "Sydney"})} underlayColor="white">
              <View>
                <Text style={styles.friendText}>Sydney Seraphim</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight onPress={() => navigate('Tab', {name: "Sydney"})} underlayColor="white">
              <View>
                <Text style={styles.neutralTabText}>$0.00</Text>
              </View>
          	 </TouchableHighlight>
        </View>



       <View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight onPress={() => navigate('Tab', {name: "Owen"})} underlayColor="white">
              <View>
                <Text style={styles.friendText}>Owen Bulka</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight onPress={() => navigate('Tab', {name: "Owen"})} underlayColor="white">
              <View>
                <Text style={styles.negativeTabText}>-$42.50</Text>
              </View>
          	 </TouchableHighlight>
        </View>

        <View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight onPress={() => navigate('Tab', {name: "Cindy"})} underlayColor="white">
              <View>
                <Text style={styles.friendText}>Cindy Zhang</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight onPress={() => navigate('Tab', {name: "Cindy"})} underlayColor="white">
              <View>
                <Text style={styles.positiveTabText}>+$1.07</Text>
              </View>
          	 </TouchableHighlight>
        </View>
        <Text></Text>

        <TouchableHighlight onPress={() => navigate('Add')} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Add Friend</Text>
              </View>
          </TouchableHighlight>
          <View style={{alignItems: 'center', paddingTop:50}}>
           <Image source={homePic} style={{width: 115, height: 138}}/>
          </View>

   </View>
    );
  }
}

class AddFriends extends React.Component {
	static navigationOptions = {
		header: null,
	};


	render() {
		const { navigate } = this.props.navigation;
     let addFriendPic = {
    uri:  'http://i65.tinypic.com/mn0r2w.jpg',
  };
		return (

		 <View>
		<View style={{paddingBottom:10, paddingTop:10}}>
       <View style ={{paddingTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 18, paddingLeft:10, marginTop: 9}}></Text>
              </View>
          </TouchableHighlight>

        <Button style={{paddingRight:15}} title = "Back"
        onPress={() => navigate('Home')}></Button>
        </View>

        </View>



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
          <View style={{alignItems:'center',paddingTop:50}}>
           <Image source={addFriendPic} style={{width: 179, height: 102}}/>
          </View>



         </View>
		);
	}
}

class Tabulation extends React.Component {
	static navigationOptions = {
    header: null,
  };

  render() {
    let tabulationPic = {
      uri:'http://i66.tinypic.com/2a0npfa.jpg',
    };
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View>
      <View style={{paddingBottom:10, paddingTop:10, borderColor: '#D3D3D3',borderBottomWidth: 1}}>
       <View style ={{paddingTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 18, paddingLeft:10, marginTop: 9, borderColor: '#D3D3D3',borderBottomWidth: 1}}>{params.name}'s Tab</Text>
              </View>
          </TouchableHighlight>

        <Button style={{paddingRight:15}} title = "Back"
        onPress={() => navigate('Home')}></Button>
        </View>

        </View>

		<View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.friendText}>Coffee</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.positiveTabText}>+$4.35</Text>
              </View>
          	 </TouchableHighlight>
        </View>


       <View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.friendText}>Movie ticket</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.negativeTabText}>-$13.50</Text>
              </View>
          	 </TouchableHighlight>
        </View>

        <View style ={{paddingTop:10, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#D3D3D3',borderBottomWidth: 1}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.friendText}>Pitch & putt</Text>
              </View>
          	 </TouchableHighlight>
			 <TouchableHighlight underlayColor="white">
              <View>
                <Text style={styles.positiveTabText}>+$16.25</Text>
              </View>
          	 </TouchableHighlight>
        </View>
        <Text></Text>

        <TouchableHighlight onPress={() => navigate('Pay', {name: params.name})} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Update Tab</Text>
              </View>
          </TouchableHighlight>
           <View style={{alignItems:'center',paddingTop:50}}>
           <Image source={tabulationPic} style={{width: 101, height: 113}}/>
          </View>
   </View>
    );
  }
}

class PaymentScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};
	render() {
    let paymentPic = {
      uri: 'http://i63.tinypic.com/mboebq.jpg',
    };

		const { navigate } = this.props.navigation;
		const { params } = this.props.navigation.state;
    return (
      <ScrollView>
      <View>
      <View style={{paddingBottom:10, paddingTop:10}}>
       <View style ={{paddingTop:10, flexDirection: 'row', justifyContent: 'space-between'}}>
             <TouchableHighlight underlayColor="white">
              <View>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 18, paddingLeft:10, marginTop: 9}}></Text>
              </View>
          </TouchableHighlight>

        <Button style={{paddingRight:15}} title = "Back"
        onPress={() => navigate('Tab', {name: params.name})}></Button>
        </View>

        </View>

       <Text style = {styles.subheading2}>I owe {params.name}</Text>
         <TextInput
           style={{height: 40, textAlign: 'left', paddingLeft: 10}}
           keyboardType = 'numeric'
           placeholder="0.00"
           onChangeText={(text) => this.setState({text})}
          />
         <Text style={{paddingBottom:5}}></Text>

		<Text style = {styles.subheading2}>{params.name} owes me</Text>
         <TextInput
           style={{height: 40, textAlign: 'left', paddingLeft: 10}}
           keyboardType = 'numeric'
           placeholder="0.00"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{paddingBottom:5}}></Text>

         <Text style = {styles.subheading2}>Description</Text>
         <TextInput
           style={{height: 40, textAlign: 'left', paddingLeft: 10}}
           placeholder="memo"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{paddingBottom:5}}></Text>

         <TouchableHighlight onPress={() => navigate('Tab', {name: params.name})} underlayColor="white">
              <View style={{backgroundColor: '#2196F3'}}>
                <Text style={styles.buttonText}>Update</Text>
              </View>
          </TouchableHighlight>
       </View>
       <View style={{alignItems:'center',paddingTop:50}}>
           <Image source={paymentPic} style={{width: 125, height: 125}}/>
          </View>
      </ScrollView>
		);
	}
}

const TabsApp = StackNavigator({
  Welcome: 	{screen: WelcomeScreen},
  Login: 	{screen: LoginScreen},
  Home:   	{screen: HomeScreen},
  Pay:      {screen: PaymentScreen},
  Tab: 		{screen: Tabulation},
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

  subheading2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
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
  	paddingLeft: 10,
  	fontSize: 16,
  	color: 'black',
  },

  positiveTabText: {
  	padding: 5,
  	paddingRight: 10,
  	fontSize: 16,
  	color: '#8DC63F',
  },

  negativeTabText: {
  	padding: 5,
  	paddingRight: 10,
  	fontSize: 16,
  	color: '#DC143C',
  },

  neutralTabText: {
  	padding: 5,
  	paddingRight: 10,
  	fontSize: 16,
  	color: '#808080',
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
