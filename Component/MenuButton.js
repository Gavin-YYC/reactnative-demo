import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, PropTypes } from 'react-native';

export default class MenuButton extends Component {
  constructor( props ) {
    super( props );
  }

  _onclick() {
    if ( this.props.onClick ) {
      this.props.onClick( this.props.text );
    }
  }

  render() {
    return (
      // 注意，TouchableWithoutFeedback 可以用来创建没有反馈的组件，即没有任何视觉上的反馈
      <View style={ styles.main } onPress = {this._onClick}>
        <Image style = { styles.iconImg } source = { this.props.icon }/>
        <Text style={ styles.text }>{ this.props.text }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  iconImg: {
    width: 60,
    height: 60
  },
  text: {
    fontSize: 15
  }
})
