import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,ScrollView} from 'react-native';
import Header from './Header'
import Lampu from './Lampu';
import LampOne from './LampOne';
import LampTwo from './LampTwo';
import Footer from './Footer';



export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView>
          <Lampu/>
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
});
