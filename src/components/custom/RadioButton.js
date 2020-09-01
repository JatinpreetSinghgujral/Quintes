import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../utils/colors";
import Images from "../../utils/Images";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class RadioButton extends Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
  }


  render() {
    let { isChecked, title, size } = this.props;
    if (!size) {
      size = styles.radioView.width
    }
    return (
      <TouchableOpacity disabled={this.props.disabled} onPress={() => {
        if (this.props.onToggle) this.props.onToggle(!isChecked)
      }} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.radioView, { backgroundColor: 'white', borderColor: colors.colorBlack, width: size, height: size }]}>
          {isChecked && <Image tintColor={colors.colorPrimary} resizeMode={'contain'} style={{ width: 17, height: 17, tintColor: colors.colorPrimary }} source={Images.ic_radio_checked} />}
        </View>
        {title && <Text style={[styles.dataText, { color: this.props.textColor }]}>{title}</Text>}
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  radioView: {
    width: 17,
    height: 17,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  dataText: {
    // fontFamily: Fonts.medium,
    fontSize: 12,
    marginHorizontal: 5
  },
})