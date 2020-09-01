import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils/colors'
import Images from '../../utils/Images'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { count, style, onPressAdd, onPressRemove } = this.props
    return (
      <View style={[style, styles.container]}>
        <TouchableOpacity onPress={onPressAdd} style={styles.btn}>
          <Image style={styles.img} source={Images.ic_home_active} />
        </TouchableOpacity>
        <View style={styles.counter}>
          <Text style={{}}>{count ? count : 0}</Text>

        </View>
        <TouchableOpacity onPress={onPressRemove} style={styles.btn}>
          <Image style={styles.img} source={Images.ic_home_deactive} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 28,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  btn: {
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    height: '100%'
  },
  counter: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minWidth: 35
  },
  img: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  }
})
