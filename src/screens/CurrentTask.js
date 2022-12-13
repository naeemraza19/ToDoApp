import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import NavService from '../config/NavService';

const CurrentTask = ({route}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: '#000',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{position: 'absolute', left: 0}}
          onPress={() => {
            NavService.goBack();
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/arrow-left.png')}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 25}}>
          {route?.params?.item?.title}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#8875FF',
          marginVertical: 20,
        }}></View>
      <Text style={{color: 'white', fontSize: 18}}>
        {route?.params?.item?.description}
      </Text>
    </View>
  );
};

export default CurrentTask;
