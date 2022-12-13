import React, {createRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {addTask} from '../firebase';
import PriorityModal from './PriorityModal';
import CategoriesModal from './CategoriesModal';
import {useDispatch, useSelector} from 'react-redux';
import NavService from '../config/NavService';
import TaskPage from '../screens/TaskPage';

const {length, width} = Dimensions.get('screen');

const showError = message => {
  return Toast.show({
    type: 'error',
    text1: message,
  });
};
const showSuccess = message => {
  return Toast.show({
    type: 'success',
    text1: message,
  });
};

export default function TabBar(props) {
  console.log(props);
  const {state, navigation} = props;
  const actionSheetRef = createRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const uid = useSelector(state => state?.user?.userData?.uid);
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <View
      style={{
        height: 65,
      }}>
      <ActionSheet ref={actionSheetRef}>
        <View style={{backgroundColor: '#363636', padding: 20}}>
          <PriorityModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            onSave={p => {
              setPriority(p);
              setIsVisible(false);
            }}
          />
          <CategoriesModal
            isVisible={isVisible2}
            setIsVisible={setIsVisible2}
            setCategory={setCategory}
            addCategories={() => {
              actionSheetRef.current?.hide();
              props.navigation.navigate('Categories');
            }}
          />
          <Text style={{color: '#fff'}}>Add Task</Text>
          <ActionSheetTextInput
            placeholder="Add title"
            value={title}
            onChangeText={setTitle}
          />
          <ActionSheetTextInput
            placeholder="Add Description"
            value={description}
            onChangeText={setDescription}
          />
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
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/timer.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible2(true);
                }}>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/tag.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(true);
                }}>
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('../assets/flag.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log(addTask, 'dfd');
                dispatch(
                  addTask(
                    uid,
                    title,
                    description,
                    category,
                    priority,
                    Date.now(),
                  ),
                );
                actionSheetRef.current?.hide();
              }}>
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
          console.log('hjkh', route.name);
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
        borderWidth: isFocused ? true : false,
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
