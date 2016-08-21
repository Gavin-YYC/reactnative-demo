import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform
} from 'react-native';

// 工具模块
import Util from '../../common/Util';
// 列表组件
import UIItemListView from '../../Component/UIItemListView';

// 进度条适配
var ProgressBar = ProgressBarAndroid;
if ( Platform.OS === 'ios' ) ProgressBar = ProgressViewIOS;

export default class RenderListView extends Component {
  constructor( props ) {
    super( props );
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    var that = this;
    Util.getJSON('http://localhost:8081/Test/itemList.json', function ( data ) {
      if ( data && data.ret === 0 ) {
        that.setState({
          dataSource: that.state.dataSource.cloneWithRows(data.content.item_list),
          isFirstLoading: true
        })
      }
    })
  }

  _rendeItemRow( item ) {
    return(
      <UIItemListView itemList={item} />
    )
  }

  render() {
    // if ( this.state.isFirstLoading ) {
    //   return this.renderLoadingView();
    // }
    return this.renderListView();
  }

  // 加载loading效果
  renderLoadingView() {
    return (
      <View>
        <ProgressViewIOS styleAttr="Large" progress={0.3} progressViewStyle={'bar'}  />
        <Text>正在努力加载...</Text>
      </View>
    )
  }

  // 加载列表
  renderListView() {
    return (
      <View>
        <ListView
          ref="listview"
          dataSource={this.state.dataSource}
          renderRow={(item) => this._rendeItemRow(item)}
          enableEmptySections={true} />
      </View>
    )
  }
}
