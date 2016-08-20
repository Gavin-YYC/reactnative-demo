import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// 导入底部导航
import TabBar from './common/TabBar';

class LSH123 extends Component {
  render() {
    return (
      <View style={[styles.container]}>
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
