import React, { Component } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

export default class SubmitButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ width: '100%', height: 40, alignItems: 'center', marginTop: this.props.marginTop }}>
        <View style={{
          width: 50, height: 50, borderRadius: 25, shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Image style={{
              width: 50, height: 50, shadowColor: "#000",
            }} source={Images.ic_home_active} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
