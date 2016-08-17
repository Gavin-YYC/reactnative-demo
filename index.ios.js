import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// 导入自定义控件
import Header from './common/Header';
import TabBar from './common/TabBar';
import Swiper from './common/Swiper';

class LSH123 extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Header />
        <Swiper />
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8347'
  }
});

AppRegistry.registerComponent('LSH123', () => LSH123);
