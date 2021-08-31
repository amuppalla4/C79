import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform, Alert, Image} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios';

export default class IssLocationScreen extends Component {
  constructor (props){
    super(props);
    this.state={
      location:{}
    }
  } componentDidMount(){
    this.getIssLocation()
  }
    getIssLocation=()=>{
      axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then(response=>{
        this.setState({location:response.data})
      })
      .catch(error=>{
          Alert.alert(error.message)
      })
      }
    render (){
      if(Object.keys(this.state.location).length===0){
        return(
          <View style={styles.container}>
            <Text>
              Loading...
            </Text>
          </View>
        )
      }else{

      
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <ImageBackground source={require('../assets/iss_bg.jpg')}
    style={styles.backgroundImage}> 
    <View style={styles.titleContainer}>
    <Text style={styles.titleText}> Iss Location Screen </Text>
    </View>
    <View style={styles.mapContainer}>
      <MapView style={styles.map}
      region={{
        latitude:this.state.location.latitude,
        longitude:this.state.location.longitude,
        latitudeDelta:100,
        longitudeDelta:100
      }}> 
        <Marker coordinate={{
        latitude:this.state.location.latitude,
        longitude:this.state.location.longitude}}>
        <Image source={require('../assets/iss_icon.png')} style={{height:50,width:50}} />
        </Marker>
        </MapView>
    </View>
    </ImageBackground>
    </View>
  );
}
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
  titleContainer:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center"
  },

  backgroundImage:{
    flex:1,
    resizeMode:"cover",
  },

  mapContainer:{
    flex:0.7,
  },

  map:{
    width:"100%",
    height:"100%"
  },
  infoContainer:{
    flex:0.2,
    backgroundColor:"white",
    marginTop:-10,
    borderTopLeftRadius:30,
    borderTopRightRadius:20,
    padding:30,
  },

  infoText:{
    fontSize:15,
    color:"black",
    fontWeight:"bold"
  }
});