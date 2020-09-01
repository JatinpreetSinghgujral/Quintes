import React, { Component } from 'react';
import { Platform, StatusBar, View, DeviceEventEmitter } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import colors from '../utils/colors';
import NavigationServices from '../utils/NavigationServices';
import ApprovedStack from './ApprovedStack';
import MyLoader from '../components/custom/MyLoader';
import StringConstants from '../utils/StringConstants';

class MySwitchNavigator extends Component {

    constructor(props) {
        super(props)
        this.updateStatusBarColor = this.updateStatusBarColor.bind(this)
        this.state = {
            statusBarColor: colors.colorBlack
        }

    }

    componentDidMount() {
        SplashScreen.hide()
        DeviceEventEmitter.addListener(StringConstants.UPDATE_STATUS_BAR_COLOR, this.updateStatusBarColor)
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeListener(StringConstants.UPDATE_STATUS_BAR_COLOR, this.updateStatusBarColor)
    }

    updateStatusBarColor(color) {
        this.setState({ statusBarColor: color })
    }

    render() {

        const SwitchNavigator = createAppContainer(
            createSwitchNavigator({
                ApprovedStack: ApprovedStack

            }, {
                initialRouteName: "ApprovedStack" 
            })
        );
        return (
            <View style={{ flex: 1, backgroundColor: colors.colorBackground }}>
                {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                {Platform.OS === 'android' && <StatusBar backgroundColor={this.state.statusBarColor} />}
                <SwitchNavigator ref={navigatorRef => {
                    NavigationServices.setTopLevelNavigator(navigatorRef);
                }} />
                <MyLoader />
            </View>
        )


    }
}

const mapStateToProps = state => {
    // console.log("state:", JSON.stringify(state))
    return {
        isLogin: state.isLoginReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MySwitchNavigator)
