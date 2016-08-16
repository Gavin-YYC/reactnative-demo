import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={[styles.header]}>
        <Image source={require('../images/about_logo.png')} style={{width: 40, height: 20}}/>
        <Text style={[styles.headerText]}>链商优供</Text>
        <Image source={require('../images/about_logo.png')} style={{width: 40, height: 20}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  header: {
    height: 68,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
