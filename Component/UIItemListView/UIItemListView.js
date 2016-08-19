// 商品信息
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class UIItemListView extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.meta}>
          <Image style={styles.skuPic} source={require('../../images/sku/sku.jpg')} />
          <View style={styles.name}>
            <Text numberOfLines={2} style={[styles.font16, styles.title]}>百士小麦王的500ml士小麦王的500ml士小麦王的500ml士小麦王的500ml/听*8</Text>
            <Text style={[styles.font16, styles.tag]}>限时秒杀</Text>
            <View style={styles.price}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#f45341', fontSize: 16}}>￥20.0</Text>
                <Text style={{color: '#9e9e9e', textDecorationLine: 'line-through', lineHeight: 19}}>￥89.2</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.operaBtn} source={require('../../images/btn/sub.png')} />
                <Text style={{paddingHorizontal: 5}}>5袋起售</Text>
                <Image style={styles.operaBtn} source={require('../../images/btn/add.png')} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.gift}><Text>赠品</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    height: 150,
    marginHorizontal: 15,
    marginTop: 15,
    backgroundColor: '#fff'
  },
  meta: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10
  },
  skuPic: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: 'center'
  },
  name: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
  font16: {
    fontSize: 16
  },
  title: {
    height: 36
  },
  tag: {
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    marginTop: 5,
    overflow: 'hidden'
  },
  price: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  operaBtn: {
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  gift: {
    height: 30,
    borderTopWidth: 1,
    borderColor: '#ccc'
  }
})
