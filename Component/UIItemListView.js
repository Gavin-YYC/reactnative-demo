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

import ModelCart from './ModelCart';

export default class UIItemListView extends Component {
  // 继承父元素的constructor
  constructor( props ) {
    super( props );
    this.modelCart = new ModelCart( this.props.itemList );
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    let that = this;
    let skuId = this.props.itemList.sku_info.sku_id;
    this.modelCart.getCurrentCount( skuId, ( count ) => {
      that.setState({
        count: count
      })
    })
  }

  // 设置需要传递的默认属性
  // 需要通过props的形式向该组件传递数据，下面这些事对数据的格式化定义
  static propTypes: {}

  // 减法计算
  _onSubstact( item, moq ) {
    if ( this.state.count > 0 ) {
      this.modelCart.sub( item, moq );
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  // 加法计算
  _onAdd( item, moq ) {
    this.modelCart.add( item, moq );
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    let item = this.props.itemList;
    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,.3)'} skuId={item.sku_info.sku_id}>
        <View style={styles.main}>
          <View style={styles.meta}>
            <Image style={styles.skuPic} source={{uri: item.sku_info.img_list[0].large}} />
            <View style={styles.name}>
              <Text numberOfLines={2} style={[styles.font16, styles.title]}>{item.sku_info.name}</Text>
              <View style={{flexDirection: 'row'}}>
                {this._renderTags(item)}
              </View>
              <View style={styles.price}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#f45341', fontSize: 16}}>￥20.0</Text>
                  <Text style={{color: '#9e9e9e', textDecorationLine: 'line-through', lineHeight: 19}}>￥{item.sale_info.sale_price}</Text>
                </View>
                {this._renderBuyBtn(item)}
              </View>
            </View>
          </View>
          {this._renderGift(item)}
        </View>
      </TouchableHighlight>
    )
  }

  // 生成赠品
  _renderGift( item ) {
    let promo = item.promo_info.give_list;
    if ( promo ) {
      return promo.map(( v, i ) => {
        return (
          <TouchableHighlight skuId={v.promo_detail.give_sku_id} key={i}>
            <View style={styles.gift}><Text>{v.promo_detail.give_sku_info.name}</Text></View>
          </TouchableHighlight>
        )
      })
    } else {
      return <View></View>
    }
  }

  // 购买按钮
  // TODO 拆分购买按钮，5件起购买
  _renderBuyBtn( item ) {
    let moq = item.sale_info.moq;
    let showMoq = moq > 1;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={() => this._onSubstact( item.sku_info, moq )}>
          <Image style={[styles.operaBtn, showMoq ? styles.hidden : {}]} source={require('../images/btn/sub.png')} />
        </TouchableWithoutFeedback>
        {this._renderCount( showMoq, item )}
        <TouchableWithoutFeedback onPress={() => this._onAdd( item.sku_info, moq )}>
          <Image style={styles.operaBtn} source={require('../images/btn/add.png')} />
        </TouchableWithoutFeedback>
      </View>
    )
  }

  _renderCount( showMoq, item ) {
    // 如果有最小起定量，则显示最小起订文案
    if ( showMoq ) {
      return <Text>{'满' + item.sale_info.moq + item.sale_info.sale_unit_name + '起售'}</Text>
    // 如果没有最少起定量，则判断是否有购买数量，如果有显示加车的数量，否则隐藏
    } else {
      return <Text style={[styles.count]}>{this.state.count}</Text>
    }
  }

  // 标签
  // 支持显示多个标签
  _renderTags( item ) {
    let tags = item.sale_info.item_tags;
    if ( tags.length ) {
      return tags.map(( v, i ) => {
        return(
          <Text
            key={'tags' + item.sale_info.sku_id}
            style={[styles.font16, styles.tag, {backgroundColor: '#' + v.bgcolor.substring(2)}]}>
            {v.name}</Text>
        )
      })
    } else {
      return <View><Text style={styles.tag}></Text></View>
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    maxHeight: 150,
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
  },
  count: {
    paddingHorizontal: 5,
    width: 28,
    textAlign: 'center'
  },
  hidden: {
    opacity: 0,
    height: 0
  }
})
