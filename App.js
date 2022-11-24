import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import {Provider} from 'react-redux';
import Nav from './src';
// import {store} from './src/redux';

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Nav />;
};

export default App;
