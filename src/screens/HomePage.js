import {View, Text, Image} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const HomePage = props => {
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
    </View>
  );
};

export default HomePage;
