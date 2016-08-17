import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
import ViewPager from 'react-native-viewpager';

// 获取设备的宽度
let deviceWidth = Dimensions.get('window').width;

const BANNER_IMGS = [
  require('../images/banner/banner1.jpg'),
  require('../images/banner/banner2.jpg'),
];

export default class Swiper extends Component {
  constructor( props ) {
    super( props );
    // 用于构建DataSource对象
    let dataSource = new ViewPager.DataSource({
      pageHasChanged: ( p1, p2 ) => p1 != p2
    })
    // 实际的DataSources存放在state中
    this.state = {
      dataSource: dataSource.cloneWithPages( BANNER_IMGS )
    }
  }

  // 渲染每一帧
  _renderPage( data, pageID ) {
    return (
      <Image source = {data} style = {styles.page} />
    )
  }

  render() {
    return (
      <View style={styles.viewPager}>
        <ViewPager
          dataSource = {this.state.dataSource}
          renderPage = {this._renderPage}
          isLoop = {true}
          autoPlay = {true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    height: 160,
  },
  page: {
    flex: 1,
    height: 160,
    width: deviceWidth
  }
})
