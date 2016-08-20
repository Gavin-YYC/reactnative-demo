// 商品信息
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

export default class UIItemListView extends Component {
  // 继承父元素的constructor
  constructor( props ) {
    super( props );
    console.log( this.props );
    this.state = {
      count: 5
    }
  }

  // 设置需要传递的默认属性
  // 需要通过props的形式向该组件传递数据，下面这些事对数据的格式化定义
  static propTypes: {}

  // 减法计算
  _onSubstact() {
    if ( this.state.count > 0 ) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  // 加法计算
  _onAdd() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,.3)'}>
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
                  <TouchableWithoutFeedback onPress={() => this._onSubstact()}>
                    <Image style={styles.operaBtn} source={require('../../images/btn/sub.png')} />
                  </TouchableWithoutFeedback>
                  <Text style={{paddingHorizontal: 5, width: 28, textAlign: 'center'}}>{this.state.count}</Text>
                  <TouchableWithoutFeedback onPress={() => this._onAdd()}>
                    <Image style={styles.operaBtn} source={require('../../images/btn/add.png')} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.gift}><Text>赠品</Text></View>
        </View>
      </TouchableHighlight>
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
