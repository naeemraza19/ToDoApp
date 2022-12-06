import React from 'react';
import {LogBox} from 'react-native';
import Loader from './src/config/loader';
import {Provider} from 'react-redux';
import Nav from './src';
import {store} from './src/redux';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

LogBox.ignoreAllLogs();

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: 'teal',
        maxHeight: 120,
        height: '100%',
        paddingVertical: 10,
      }}
      text1Style={{
        fontSize: 12,
        color: '#000',
      }}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={5}
      style={{
        borderLeftColor: '#ff4040',
        borderWidth: 5,
        maxHeight: 120,
        height: '100%',
        paddingVertical: 10,
      }}
      text1Style={{
        fontSize: 12,
        color: '#000',
      }}
    />
  ),
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Loader />
        <Nav />
        <Toast config={toastConfig} />
      </Provider>
    </>
  );
};

export default App;
