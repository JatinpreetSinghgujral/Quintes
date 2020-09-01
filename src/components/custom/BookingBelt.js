import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Dash from 'react-native-dash';
import colors from '../../utils/colors';
// import Fonts from '../../utils/Fonts';
import Images from '../../utils/Images';

const screenWidth = Dimensions.get('window').width;
export default class BookingBelt extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, style, } = this.props;
    return (
      <View style={[style, { marginHorizontal: 0, paddingHorizontal: 0, marginVertical: 10 }]}>
        <View style={styles.reviewBelt}>
          <View style={styles.circleView}>
            <Image style={styles.image} source={Images.ic_contact_info} />
            {type && type > 0 && <Image style={{ position: 'absolute', height: 16, width: 16, right: -1, top: -1 }} source={Images.ic_radio_checked} />}
          </View>
          <Dash style={{ flex: 1 }} dashColor={colors.colorWhite} dashThickness={1} />

          <View style={styles.circleView}>
            <Image style={styles.image} source={Images.ic_personal_info} />
            {type && type > 1 && <Image style={{ position: 'absolute', height: 16, width: 16, right: -1, top: -1 }} source={Images.ic_radio_checked} />}
          </View>
          <Dash style={{ flex: 1 }} dashColor={colors.colorWhite} dashThickness={1} />

          <View style={styles.circleView}>
            <Image style={styles.image} source={Images.ic_vehicle_type} />
            {type && type > 2 && <Image style={{ position: 'absolute', height: 16, width: 16, right: -1, top: -1 }} source={Images.ic_radio_checked} />}
          </View>
          <Dash style={{ flex: 1 }} dashColor={colors.colorWhite} dashThickness={1} />

          <View style={styles.circleView}>
            <Image style={styles.image} source={Images.ic_certificate} />
            {type && type > 3 && <Image style={{ position: 'absolute', height: 16, width: 16, right: -1, top: -1 }} source={Images.ic_radio_checked} />}
          </View>



        </View>
        <View style={styles.viewText}>
          <View style={{ alignItems: 'flex-start', width: ((screenWidth - 190) / 6) + 40, }}>
            <Text style={styles.textItem}>Contact Info</Text>
          </View>
          <View style={styles.centerText}>
            <Text style={styles.textItem}>
              Personal Info
            </Text>
          </View>
          <View style={styles.centerText}>
            <Text style={styles.textItem}>
              Vehicle
            </Text>
          </View>

          <View style={{ alignItems: 'flex-end', width: ((screenWidth - 190) / 6) + 40, }}>
            <Text style={styles.textItem}>Certificate</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reviewBelt: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  circleView: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemView: {
    width: 45,
    alignItems: 'center',
  },
  centerText: {
    alignItems: 'center',
    width: ((screenWidth - 190) / 3) + 40,
  },
  viewText: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    width: '100%'
    //justifyContent: 'space-between',
  },
  textItem: {
    color: colors.colorWhite,
    // fontFamily: Fonts.medium,
    fontSize: 11,
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});
