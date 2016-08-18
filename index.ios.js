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

import MenuButtons from './home/MenuButtons';

class LSH123 extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Header />
        <Swiper />
        <MenuButtons />
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('LSH123', () => LSH123);
