import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';

const {length, width} = Dimensions.get('screen');
const LogInPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
          fontSize: 30,
          fontWeight: '500',
          paddingVertical: 30,
          paddingBottom: 10,
        }}>
        LogIn
      </Text>
      {/* <View>
        <Text style={{color: '#fff', paddingBottom: 10}}>Username</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#979797',
            backgroundColor: '#1D1D1D',
            paddingVertical: 15,
            borderRadius: 5,
          }}>
          <TextInput
            style={{color: '#fff'}}
            placeholder="Enter Your Username"
            placeholderTextColor={'grey'}
          />
        </View>
      </View> */}
      <CustomTextInput
        label={'Username'}
        placeholder={'Enter Your Username'}
        value={username}
        // onChangeText={setUsername}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      {/* <View>
        <Text style={{color: '#fff', paddingBottom: 10, paddingTop: 20}}>
          Password
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#979797',
            backgroundColor: '#1D1D1D',
            paddingVertical: 15,
            borderRadius: 5,
          }}>
          <TextInput
            style={{color: '#fff'}}
            placeholder="Enter Your Password"
            placeholderTextColor={'grey'}
            secureTextEntry
          />
        </View>
      </View> */}
      <CustomTextInput
        label={'Password'}
        placeholder={'Enter Your Password'}
        value={password}
        secureTextEntry
        onChangeText={password => {
          setPassword(password);
        }}
      />
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#8687E7',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 5,
          marginVertical: 40,
        }}>
        <Text style={{color: '#fff'}}>LOGIN</Text>
      </TouchableOpacity> */}
      <CustomButton
        onPress={() => {
          props.navigation.navigate('AppStack');
        }}
        title={'LOGIN'}
        containerStyle={{marginVertical: 40}}
      />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <Image
          style={{width: (width - 55) / 2}}
          source={require('../assets/dash2.png')}
        />
        <Text style={{color: '#fff'}}>or</Text>
        <Image
          style={{width: (width - 55) / 2}}
          source={require('../assets/dash2.png')}
        />
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          paddingVertical: 10,
          borderColor: '#8875FF',
          marginVertical: 20,
        }}>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={require('../assets/google.png')}
        />
        <Text style={{color: '#fff', paddingLeft: 10}}>LogIn With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          paddingVertical: 10,
          borderColor: '#8875FF',
        }}>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={require('../assets/apple.png')}
        />
        <Text style={{color: '#fff', paddingLeft: 10}}>LogIn With Apple</Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 50,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#fff'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('CreateAccountPage');
            }}>
            <Text style={{color: '#8875FF', paddingLeft: 10, fontSize: 18}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogInPage;
