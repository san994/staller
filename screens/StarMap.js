import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {WebView}from 'react-native-webview'

export default class StarMapScreen extends Component{

    constructor(){
        super()
        this.state={
            latitude:'',
            longitude:''
        }
    }

    render(){
        const{latitude,longitude}=this.state
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=
         ${latitude}&latitude=${longitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`
        return(
            <View>
                <TextInput
                 style={styles.textInput}
                 onChangeText={(text)=>{
                    this.setState({
                        latitude:text
                    })
                 }}
                 placeholder={"ttype here"}
                />
                <TextInput
                 style={styles.textInput}
                 onChangeText={(text)=>{
                    this.setState({
                        longitude:text
                    })
                 }}
                 placeholder={'type here'}
                />
                <WebView
                   scalesPageToFit={true}
                   source={{uri:path}}
                   style={{marginTop:20,marginBottom:20}}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({

  textInput:{
      marginTop:10
  }

})