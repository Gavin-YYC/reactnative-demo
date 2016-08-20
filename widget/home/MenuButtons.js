import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuButton from '../../Component/MenuButton';

// 数据模拟
const MENU_CONFIG = [
  {
    icon: require('../../images/cate/cate1.png'),
    text: '饮料／水'
  }, {
    icon: require('../../images/cate/cate2.png'),
    text: '方便速食'
  }, {
    icon: require('../../images/cate/cate3.png'),
    text: '酒类'
  }, {
    icon: require('../../images/cate/cate4.png'),
    text: '糖果休食'
  }, {
    icon: require('../../images/cate/cate5.png'),
    text: '调料干货'
  }, {
    icon: require('../../images/cate/cate6.png'),
    text: '坚果炒货'
  }, {
    icon: require('../../images/cate/cate7.png'),
    text: '调味酱'
  }, {
    icon: require('../../images/cate/cate8.png'),
    text: '纸制品'
  }
];

export default class MenuButtons extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      // 这里不知道如何动态的生成两行四列的布局了。。。后期学习了在改，现在先这样做
      <View style={this.props.style}>
        <View style={{flexDirection: 'row'}}>
          { this.renderMenus( MENU_CONFIG, 1, 4 ) }
        </View>
        <View style={{flexDirection: 'row'}}>
          { this.renderMenus( MENU_CONFIG, 5, 8 ) }
        </View>
      </View>
    )
  }

  renderMenus( items, start, end ) {
    return items.map( ( item, index ) => {
      if ( ( index + 1 ) >= start && ( index + 1 ) <= end )
        return this.renderMenu( item, index )
    })
  }

  renderMenu( item, index ) {
    return (
      <MenuButton icon={ item.icon } text={ item.text } key={index} />
    )
  }
}
