import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { response } from 'express';

export default class MeteorScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      meteors:{}
    }
  }
  getMeteors=()=>{
    axios
    .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=eQarrGpqVYkRHQf26ZNqu12H3UCHnnpS5OdrIQk1")
    .then(response=>{
      this.setState({meteors:response.data.near_earth_objects})

    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  componentDidMount(){
    this.getMeteors()
  }
    render (){
      if(Object.keys(this.state.meteors).length===0){
        return(
          <View style={styles.container}>
            <Text>
              Loading...
            </Text>
          </View>
        )
      }else{
        let Meteor_arr=Object.keys(this.state.meteors).map
  return (
    <View style={styles.container}>
      <Text> Meteor Screen </Text>
    </View>
  );
}}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
