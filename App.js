/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  BackHandler, StatusBar,
  ToastAndroid,
  LogBox
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import MySwitchNavigator from './src/routes/MySwitchNavigator';





class App extends Component {
  constructor(props) {
    super(props)
    this.lastBackButtonPress = null;
    this.state = {

    }
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (this.lastBackButtonPress + 2000 >= new Date().getTime()) {
        BackHandler.exitApp();
        return true;
      }
      else {
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
        this.lastBackButtonPress = new Date().getTime();
        return true;
      }
    });
  }
  componentWillUnmount() {
    this.backHandler.remove()
  }

  render() {
    LogBox.ignoreAllLogs(true)
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="light-content" />
          <MySwitchNavigator />

        </PersistGate>
      </Provider>
    );
  }
}
export default App;
