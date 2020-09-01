import React, { Component } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import CardView from 'react-native-cardview'
import Images from '../../utils/Images'
import NavigationServices from '../../utils/NavigationServices'

export default class FABHome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CardView
        cardElevation={3}
        cardMaxElevation={3}
        cornerRadius={25}
        style={{ position: 'absolute', bottom: 40, right: 30, zIndex: 5, alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 25 }}  >
        <TouchableOpacity onPress={() => NavigationServices.navigate("HomeScreen")} style={{ height: '100%', width: '100%', overflow: 'hidden', }}>
          <ImageBackground style={{ resizeMode: 'contain', width: '100%', height: '100%' }} source={Images.ic_home} />
        </TouchableOpacity>
      </CardView>
    )
  }
}

const styles = StyleSheet.create({

})
