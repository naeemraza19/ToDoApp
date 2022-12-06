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
import CustomButton from './CustomButton';
import ActionSheet from 'react-native-actions-sheet';
import Modal from 'react-native-modal';
import {addTask} from '../firebase';

const {length, width} = Dimensions.get('screen');

const flagButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tagCategories = [
  {
    icon: require('../assets/grocery.png'),
    name: 'Grocery',
  },
  {
    icon: require('../assets/work.png'),
    name: 'Work',
  },
  {
    icon: require('../assets/sport.png'),
    name: 'Sports',
  },
  {
    icon: require('../assets/design.png'),
    name: 'Design',
  },
  {
    icon: require('../assets/university.png'),
    name: 'University',
  },
  {
    icon: require('../assets/social.png'),
    name: 'Social',
  },
  {
    icon: require('../assets/music.png'),
    name: 'Music',
  },
  {
    icon: require('../assets/health.png'),
    name: 'Health',
  },
  {
    icon: require('../assets/movie.png'),
    name: 'Movie',
  },
  {
    icon: require('../assets/Home.png'),
    name: 'Home',
  },
  {
    icon: require('../assets/plus.png'),
    name: 'Create New',
  },
];

export default function TabBar(props) {
  console.log(props);
  const {state, navigation} = props;
  const actionSheetRef = createRef();
  const [isVisible, setIsVisible] = useState(false);
  const [priority, setPriority] = useState(1);
  const [isVisible2, setIsVisible2] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View
      style={{
        height: 65,
      }}>
      <ActionSheet ref={actionSheetRef}>
        <View style={{backgroundColor: '#363636', padding: 20}}>
          <Modal
            isVisible={isVisible}
            onRequestClose={() => {
              setIsVisible(false);
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setIsVisible(false);
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#363636',
                  width: '100%',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}>
                <Text style={{marginBottom: 10, color: '#fff'}}>
                  Task Priority
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#fff',
                    width: '100%',
                    marginBottom: 20,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  {flagButtons.map(item => {
                    console.log(item);
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setPriority(item);
                        }}
                        style={{
                          alignItems: 'center',
                          backgroundColor:
                            priority === item ? '#8875FF' : '#272727',
                          paddingHorizontal: 25,
                          paddingVertical: 10,
                          borderRadius: 5,
                          marginHorizontal: 2,
                          marginVertical: 2,
                        }}>
                        <Image
                          style={{
                            height: 25,
                            width: 25,
                            resizeMode: 'contain',
                          }}
                          source={require('../assets/flag.png')}
                        />
                        <Text style={{color: '#fff', paddingTop: 10}}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsVisible(false);
                    }}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#8875FF'}}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#8875FF',
                      paddingVertical: 10,
                      borderRadius: 5,
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#fff'}}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
          <Modal
            isVisible={isVisible2}
            onRequestClose={() => {
              setIsVisible2(false);
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setIsVisible2(false);
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#363636',
                  width: '100%',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}>
                <Text style={{marginBottom: 10, color: '#fff'}}>
                  Choose Category
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#fff',
                    width: '100%',
                    marginBottom: 20,
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  {tagCategories.map((item, index) => {
                    console.log(index + 1 === tagCategories.length);
                    return (
                      <TouchableOpacity
                        style={{
                          height: 80,
                          width: width / 3 - 40,
                          alignItems: 'center',
                          paddingVertical: 20,
                          borderRadius: 5,
                          marginHorizontal: 10,
                          marginVertical: 10,
                        }}>
                        <Image
                          style={{
                            height: 25,
                            width: 25,
                            resizeMode: 'contain',
                            tintColor:
                              index + 1 === tagCategories.length && '#00a369',
                            // or
                            // tintColor:
                            //   item.name === 'Create New' ? '#00a369' : null,
                          }}
                          source={item.icon}
                        />
                        <Text style={{color: '#fff', paddingTop: 10}}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View style={{width: '100%'}}>
                  <CustomButton
                    onPress={() => {
                      setIsVisible2(false);
                      actionSheetRef.current?.hide();
                      props.navigation.navigate('Categories');
                    }}
                    title="Add Categories"
                    containerStyle={{marginTop: 20}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
          <Text style={{color: '#fff'}}>Add Task</Text>
          <ActionSheetTextInput placeholder="Add title" />
          <ActionSheetTextInput
            placeholder="Add Description"
            value={''}
            onChangeText={''}
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
                addTask(title);
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
