
 import React, { Component } from 'react';
 import QRCodeScanner from 'react-native-qrcode-scanner';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';

 export default class Scanner extends Component{
   state = {
     qr: ""
   }
   onScan = (e) => {
     this.setState({qr:e.data})
   }
 
   render(){

     return(
       <View style = {[styles.viewStyle, this.props.theme.backgroundColor]}>
         <QRCodeScanner
         showMarker = {true}
         reactivate = {true}
         reactivateTimeout = {3000}
         cameraStyle={{ width: '100%'}}
         onRead={this.onScan}
         topContent={
            <Text style={[styles.textBot, this.props.theme.text]}>
               Please move your camera {"\n"} over the QR Code
            </Text>
        }
         bottomContent={
                <Text style={[styles.textBot, this.props.theme.text]}>{this.state.qr}</Text>
         }
       />
     </View>
     
     )
 
     
   }
 }
 
 const styles = StyleSheet.create({
   textBot: {
     fontSize: 20,
     textAlign: 'center',
   },
   viewStyle : {
    flex: 1,
    justifyContent: 'flex-start',
   }
 });