import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

// 导入自定义控件
import Header from '../../common/Header';
import Swiper from '../../common/Swiper';
import RenderListView from './RenderListView';

import MenuButtons from './MenuButtons';

export default class HomeView extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Header />
        <ScrollView>
          <Swiper />
          <MenuButtons style={{backgroundColor: '#fff'}} />
          <View style={{flex: 1, marginBottom: 15}}>
            <RenderListView />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  }
});
