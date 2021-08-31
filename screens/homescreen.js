import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image,} from 'react-native';

export default class Homescreen extends Component {
    render (){
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <ImageBackground source={require('../assets/bg_image.png')}>

      <View style={styles.titleBar}>
      <Text style={styles.titleText}> Iss Tracker App</Text>
      </View>
      <TouchableOpacity style={styles.routeCard}
      onPress={()=> this.props.navigation.navigate("IssLocation")}>
        <Text style={styles.routeText}> 

          Iss Location 
        </Text>
        <Text style={styles.knowMore}>
          {"knowMore --->"}
        </Text>
        <Text style={styles.bgDigit}>
          1
        </Text>
        <Image source={require("../assets/iss_icon.png")}style={styles.iconImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.routeCard}
      onPress={()=> this.props.navigation.navigate("Meteor")}>
        <Text style={styles.routeText}>
          Meteors 
        </Text>
        <Text style={styles.knowMore}>
          {"knowMore --->"}
        </Text>
        <Text style={styles.bgDigit}>
          2
        </Text>
        <Image source={require("../assets/meteor_icon.png")}style={styles.iconImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.routeCard}
      onPress={()=> this.props.navigation.navigate("Update")}>
        <Text style={styles.routeText}>
          Updates
        </Text>
        <Text style={styles.knowMore}>
          {"knowMore --->"}
        </Text>
        <Text style={styles.bgDigit}>
          3
        </Text>
        <Image source={require("../assets/rocket_icon.png")}style={styles.iconImage} />
      </TouchableOpacity>
      </ImageBackground>

    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea:{
    marginTop:Platform.OS==="ios"?StatusBar.currentHeight:0
  },
  titleText:{
    fontSize:40,
    fontWeight:"bold",
    color:"blue"
  },
  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center"
  },
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:"white",
  },
  backgroundImage:{
    flex:1,
    resizeMode:"cover",
  },
  routeText:{
    fontSize:40,
    fontWeight:'bold',
    color:'black',
    marginTop:75,
    paddingLeft:20,

  },
  knowMore:{
    paddingLeft:30,
    color:"red",
    fontSize:15,
  },
  bgDigit:{
    position:"absolute",
    color:"rgba(183,183,183,0.5)",
    fontSize:150,
    right:20,
    bottom:-15,
    zIndex:-1,
  },
  iconImage:{
    position:'absolute',
    height:200,
    width:200,
    resizeMode:"contain",
    right:20,
    top:-80
  }


});
