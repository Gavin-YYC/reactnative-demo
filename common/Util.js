import React from 'react';
// Dimensions 获取设备屏幕的尺寸（宽高）
// PixelRatio 像素密度
import { Dimensions, PixelRatio } from 'react-native';

// 导入野狗并创建实例
import Wilddog from 'wilddog';
let ref = new Wilddog("https://lsh.wilddogio.com/");

export default {
  // 单位像素
  pixel: 1 / PixelRatio.get(),

  // 屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  // 发送数据
  post( url, data, callback ) {
    let fetchOpts = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( data )
    };
    fetch( url, fetchOpts )
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      }).catch((err) => {
        console.log( '错误处理' );
      })
  },

  // 获取数据
  getJSON( url, callback ) {
    fetch( url )
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      }).catch((err) => {
        alert( err );
      });
  }
}
