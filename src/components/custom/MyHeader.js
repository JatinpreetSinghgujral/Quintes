import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from "../../utils/colors";
import Images from '../../utils/Images';
import NavigationServices from '../../utils/NavigationServices';
import { TextSemiBold } from './TextView';

let Fonts = {
    bold: null,
    semiBold: null,
    medium: null,
    regular: null
}



class MyHeader extends Component {

    renderLeftIcon() {
        const { drawer } = this.props
        return (
            <View style={{ width: '15%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    if (this.props.drawer) {
                        drawer.openDrawer()
                    } else {
                        if (this.props.leftImg || this.props.leftText) {
                            this.props.onPressLeft()
                        }
                        else
                            NavigationServices.goBack()
                    }
                }}>
                    {this.props.drawer ?
                        <Image source={this.props.leftImg || Images.ic_menu_hamburger} style={{ height: 20, width: 20, resizeMode: 'contain' }} /> :
                        <TextSemiBold style={{ color: colors.colorWhite, fontSize: 15 }} title={this.props.leftText || "Back"} />
                    }
                </TouchableOpacity>
            </View>
        )

    }

    renderMiddleText() {
        const { title } = this.props

        return (
            <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                {!title ?
                    <Image source={Images.ic_logo} tintColor={colors.colorWhite} style={{ height: '150%', aspectRatio: 1, resizeMode: 'contain', tintColor: colors.colorWhite }} /> :
                    <TextSemiBold style={{ color: colors.colorWhite, fontSize: 15 }} title={title} />
                }
            </View>
        )

    }

    renderRightIcon() {
        const { drawer } = this.props
        return (
            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => {
                    if (this.props.rightImg || this.props.rightText) {
                        this.props.onPressRight()
                    }
                }}>
                    {this.props.rightText ? <TextSemiBold style={{ color: colors.colorWhite, fontSize: 15 }} title={this.props.rightText} /> :
                        this.props.rightImg ? <Image source={this.props.rightImg} style={{ height: 20, width: 20, resizeMode: 'contain' }} /> : null}
                </TouchableOpacity>
            </View>
        )

    }



    render() {
        const { transparent } = this.props
        return (

            <View style={[styles.toolbar, { backgroundColor: transparent ? 'transparent' : colors.colorBlack }]}>

                {this.renderLeftIcon()}

                {this.renderMiddleText()}

                {this.renderRightIcon()}


            </View>
        )
    }
}

MyHeader.propTypes = {
    title: PropTypes.string,
    onPressAdd: PropTypes.func,
    onPressNotification: PropTypes.func,
    onPressLogout: PropTypes.func,
}

export default MyHeader

const styles = StyleSheet.create({
    toolbar: {
        height: (Platform.OS === 'ios') ? 44 : 56,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        // backgroundColor: colors.colorBlack,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
        shadowRadius: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.colorWhite
    },


})
