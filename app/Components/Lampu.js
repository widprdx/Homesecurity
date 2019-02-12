import React, { Component } from 'react'
import { View, StyleSheet, Image, Button } from 'react-native';
import LampOne from './LampOne';
import LampTwo from './LampTwo';
import LampTrhee from './LampTrhee';
import LampFour from './LampFour';
import LampFive from './LampFive';
import LampSix from './LampSix';
import LampSeven from './LampSeven';
import LampEight from './LampEight';

export class Lampu extends Component {
  render() {
    return (
      <View style={styles.lampu}>  
        <View style={styles.boxLamp}>
            <LampOne/>
            <LampTwo />
        </View> 
        <View style={styles.boxLamp}>
            <LampTrhee/>
            <LampFour />
        </View>
        <View style={styles.boxLamp}>
            <LampFive/>
            <LampSix />
        </View>
        <View style={styles.boxLamp}>
            <LampSeven/>
            <LampEight />
        </View>
       
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    lampu:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft:40,
        marginRight:40,
    },
    boxLamp:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})

export default Lampu
