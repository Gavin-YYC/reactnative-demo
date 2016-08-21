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
    this.key = 'model-cart-buy-count';

    // 当前已购买列表
    // [{sku_id: 10080, count: 12, tab: 1}]
    this.arrBuyCount = [] ;
    this.init();  // 初始化本地存储
  }

  init( item ) {
    let that = this;
    // this.storage.remove({key: this.key});
    this.storage.load({key: this.key}).then(( res ) => {
      that.arrBuyCount = JSON.parse( res );
    }).catch(( err ) => {
      that.storage.save({key: that.key, rawData: JSON.stringify([])});
    })
  }

  _updateBuyCountry( skuId, count, skuInfo ) {
    let _arrBuyCount = JSON.parse(JSON.stringify( this.arrBuyCount ));
    // 如果已经买了该商品，先删除掉，然后在添加
    _arrBuyCount.forEach(( v, i ) => {
      if ( v.sku_id == skuId ) _arrBuyCount.splice( i, 1 );
    });
    _arrBuyCount.unshift({
      sku_id: skuId,
      count: count,
      tab: skuInfo.storage_type_id
    });
    this._localSave( _arrBuyCount );
  }

  // 保存到数据库中
  _localSave( arr ) {
    this.storage.save({
      key: this.key,
      rawData: JSON.stringify( arr )
    })
  }

  // 获取最新的数据库数据
  _localGet( callback ) {
    let that = this;
    this.storage.load({
      key: this.key,
      syncInBackground: false  // 强制同步读取
    }).then((res) => {
      that.arrBuyCount = JSON.parse( res );
      callback( that.arrBuyCount );
    }).catch((err) => {
      alert( err );
    })
  }

  /*
   * 增加
   * @params {skuInfo} sku_info
   */
  add( skuInfo, moq ) {
    let that = this;
    let skuId = skuInfo.sku_id;
    // 因此数据的读取时异步的，而加减操作要求同步，所以这里暂时先采取回调的方式进行
    this.getCurrentCount( skuId, ( currentCount ) => {
      let count = currentCount === 0 ? +moq : 1;
      currentCount += count;
      that._updateBuyCountry( skuId, currentCount, skuInfo );
    })
  }

  /*
   * 减少
   * @params {skuInfo} sku_info
   */
  sub( skuInfo, moq ) {
    let that = this;
    let skuId = skuInfo.sku_id;
    // 因此数据的读取时异步的，而加减操作要求同步，所以这里暂时先采取回调的方式进行
    this.getCurrentCount( skuId, ( currentCount ) => {
      let count = currentCount === 0 ? +moq : 1;
      currentCount -= count;
      that._updateBuyCountry( skuId, currentCount, skuInfo );
    })
  }

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

  // 获取当前商品的数量
  getCurrentCount( skuId, callback ) {
    this._localGet(( res ) => {
      var currentCount = 0;
      res.forEach(( v, i ) => {
        if ( v.sku_id == skuId ) {
          currentCount = v.count;
        }
      });
      callback( currentCount );
    });
  }

}
