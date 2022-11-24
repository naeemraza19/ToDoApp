import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomButton from '../Components/CustomButton';

const WelcomePage = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image
          style={{
            tintColor: '#fff',
            height: 25,
            width: 25,
            resizeMode: 'contain',
          }}
          source={require('../assets/arrow-left.png')}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 32,
          fontWeight: '500',
          paddingTop: 40,
        }}>
        Welcome to UpTodo
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 14,
          padding: 20,
        }}>
        Please login to your account or create new account to continue
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 50}}>
        {/* <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('LogInPage');
          }}
          style={{
            backgroundColor: '#8875FF',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
            marginBottom: 20,
          }}>
          <Text style={{color: '#fff'}}>LOGIN</Text>
        </TouchableOpacity> */}
        <CustomButton
          onPress={() => {
            props.navigation.navigate('LogInPage');
          }}
          title={'LOGIN'}
          containerStyle={{marginBottom: 20}}
        />
        {/* <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('CreateAccountPage');
          }}
          style={{
            borderWidth: 1,
            borderColor: '#8875FF',
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
          }}>
          <Text style={{color: '#fff'}}>Create an account</Text>
        </TouchableOpacity> */}
        <CustomButton
          onPress={() => {
            props.navigation.navigate('CreateAccountPage');
          }}
          containerStyle={{backgroundColor: 'transparent'}}
          title={'Create An Account'}
        />
      </View>
    </View>
  );
};

export default WelcomePage;
