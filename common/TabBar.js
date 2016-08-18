import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
// 引入底部导航模块
import TabNavigator from 'react-native-tab-navigator'

const ImgRoot = '../images/';

// tabBar
export default class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      tabs: [{
        img: require('../images/home.png'),
        imgActive: require('../images/home_active.png'),
        title: 'home'
      },{
        img: require('../images/cate.png'),
        imgActive: require('../images/cate_active.png'),
        title: 'cate'
      },{
        img: require('../images/buy.png'),
        imgActive: require('../images/buy_active.png'),
        title: 'buy'
      },{
        img: require('../images/my.png'),
        imgActive: require('../images/my_active.png'),
        title: 'my'
      }]
    }
  }
  // 创建tab
  renderTab(list) {
    return list.map((item, index)=>this.renderItem(item, index))
  }
  // 创建每个item
  renderItem(item, index){
    return (
      <TabNavigator.Item
        key={index}
        selected={this.state.selectedTab === item.title}
        title={item.title}
        renderIcon={() => <Image source={ item.img } style={[styles.tabIcon]} />}
        renderSelectedIcon={() => <Image source={ item.imgActive } style={[styles.tabIcon]} />}
        onPress={() => this.setState({ selectedTab: item.title })}>
        {this.createChildView( item.title )}
      </TabNavigator.Item>
    )
  }
  // 创建子视图
  createChildView(tab){
    return (
      <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:22}}>{tab}</Text>
      </View>
    )
  }
  // 生成菜单
  render(){
    const tabs = this.state.tabs
    return(
      <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tabBar}>
        {this.renderTab( tabs )}
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 55,
    backgroundColor: '#fff'
  },
  tabIcon: {
    width: 28,
    height: 28,
    marginTop: 10
  }
})
