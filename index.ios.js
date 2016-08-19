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
import UIItemListView from './Component/UIItemListView/UIItemListView';

import MenuButtons from './widget/home/MenuButtons';

class LSH123 extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Header />
        <Swiper />
        <MenuButtons />
        <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
          <UIItemListView />
        </View>
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
