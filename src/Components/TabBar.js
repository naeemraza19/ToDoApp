import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  LayoutAnimation,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

export default function TabBar(props) {
  const {state, navigation} = props;
  const actionSheetRef = createRef();
  return (
    <View
      style={{
        height: 65,
      }}>
      <ActionSheet ref={actionSheetRef}>
        <View style={{backgroundColor: '#363636', padding: 20}}>
          <Text style={{color: '#fff'}}>Add Task</Text>
          <ActionSheetTextInput placeholder="Add title" />
          <ActionSheetTextInput placeholder="Add Description" />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={showDatePicker}>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/timer.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/tag.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/flag.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                style={{height: 25, width: 25, resizeMode: 'contain'}}
                source={require('../assets/send.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#363636',
          flexDirection: 'row',
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          let imageSrc = require('../assets/Home.png');
          if (route.name === 'ProfileStack')
            imageSrc = require('../assets/Profile.png');

          let title = 'Home';
          if (route.name === 'ProfileStack') title = 'Profile';
          if (route.name === 'Add') {
            return (
              <TouchableOpacity
                onPress={() => {
                  actionSheetRef.current?.show();
                }}
                style={{
                  height: 75,
                  width: 75,
                  backgroundColor: '#8875FF',
                  borderRadius: 50,
                  top: -35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                    tintColor: '#fff',
                  }}
                  source={require('../assets/plus.png')}
                />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={{alignItems: 'center'}}>
              <Image
                source={imageSrc}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: isFocused ? '#8875FF' : '#fff',
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: 'white',
                  // textAlign: 'center',
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const ActionSheetTextInput = props => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{
        borderWidth: isFocused ? 1 : 0,
        paddingVertical: 10,
        paddingHorizontal: isFocused ? 10 : 0,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
      }}>
      <TextInput
        style={{color: '#fff'}}
        placeholderTextColor={'#fff'}
        onFocus={() => {
          LayoutAnimation.spring();
          setIsFocused(true);
        }}
        onBlur={() => {
          LayoutAnimation.spring();

          setIsFocused(false);
        }}
        {...props}
      />
    </View>
  );
};
