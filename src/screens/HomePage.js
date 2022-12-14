import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {saveTask, saveUser} from '../redux/actions';
import {getTask} from '../firebase';
import {useState} from 'react';
import NavService from '../config/NavService';

const HomePage = props => {
  const dispatch = useDispatch();
  const uid = useSelector(state => state?.user?.userData?.uid);
  const user = useSelector(state => state?.user?.userData);
  console.log('user', user);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    SplashScreen.hide();
    dispatch(getTask(uid, setResponse));
  }, []);
  console.log(response, 'useeffect');
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 35, width: 35, position: 'absolute', left: 0}}
          source={require('../assets/menu.png')}
        />
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
          Index
        </Text>
        <Image
          style={{
            height: 30,
            width: 30,
            borderRadius: 50,
            position: 'absolute',
            right: 0,
          }}
          source={require('../assets/image-person.jpeg')}
        />
      </View>
      <View style={{alignItems: 'center', paddingVertical: 50}}>
        <Image
          style={{height: 200, width: 200, resizeMode: 'contain'}}
          source={require('../assets/Checklist.png')}
        />
      </View>

      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 20,
          paddingBottom: 20,
        }}>
        What do you want to do today?
      </Text>
      <Text style={{color: '#fff', textAlign: 'center'}}>
        Tap + to add your tasks
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            NavService.navigate('TaskPage');
          }}
          style={{
            backgroundColor: '#8875FF',
            width: '100%',
            height: 50,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
            Your Tasks
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
