import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

export default class ModelCart {
  constructor( item = {} ) {
    this.storage = new Storage({
      // 最大容量，默认值1000条数据循环存储
      size: 1000,

      // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
      // 如果不指定则数据只会保存在内存中，重启后即丢失
      storageBackend: AsyncStorage,

      // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
      defaultExpires: 1000 * 3600 * 24,

      // 读写时在内存中缓存数据。默认启用。
      enableCache: true,
    });
    // this.init( item );  // 初始化商品数据
  }

  key: 'model-cart-buy-count'

  item: null // 当前商品信息

  arrBuyCount: null  // 当前已购买列表

  init( item ) {
    let that = this;
    this.item = item;
    this.storage.load({key: this.key}).then(( res ) => {
      that.arrBuyCount = res;
    }).catch(( err ) => {
      that.storage.save({key: that.key, rawData: []});
    })
  }

  /*
   * 增加
   */
  add() {}

  /*
   * 减少
   */
  sub() {}

  /*
   * 删除
   */
  remove() {}

  /*
   * 清空
   */
  empty() {}

  /*
   * 获取所有购买商品
   */
  getAll() {}

  /*
   * 根据sku_id获取该条购买信息
   */
  getInfo( skuId ) {}

}
