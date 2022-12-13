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
import {login} from '../firebase';
import {useDispatch} from 'react-redux';

const {length, width} = Dimensions.get('screen');
const LogInPage = props => {
  const [email, setEmail] = useState('A@b.com');
  const [password, setPassword] = useState('Abcd123');

  const dispatch = useDispatch();

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
      <CustomTextInput
        label={'Email'}
        placeholder={'Enter Your Email'}
        value={email}
        // onChangeText={setemail}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <CustomTextInput
        label={'Password'}
        placeholder={'Enter Your Password'}
        value={password}
        secureTextEntry
        onChangeText={password => {
          setPassword(password);
        }}
      />
      <CustomButton
        onPress={() => {
          dispatch(login(email, password));
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
