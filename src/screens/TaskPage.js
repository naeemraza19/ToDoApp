import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, getTask} from '../firebase';
import NavService from '../config/NavService';
import {tagCategories} from '../Components/TagCategories';
import {saveTask} from '../redux/actions';

const TaskPage = props => {
  const tasks = useSelector(state => state?.user.task);
  const [search, setSearch] = useState('');
  console.log('taks', tasks);
  useEffect(() => {
    // dispatch(getTask(uid, setResponse));
  }, []);
  const dispatch = useDispatch();

  let sortedData = tasks;
  console.log('Sss', sortedData);
  sortedData.sort((a, b) => {
    return a?.priority?.toString()?.localeCompare(b?.priority?.toString());
  });

  // const onDelete = index => {
  //   console.log('object', index);
  //   sortedData.splice(0, index);
  // };
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
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#979797',
              backgroundColor: '#1D1D1D',
              paddingVertical: 15,
              borderRadius: 5,
              paddingHorizontal: 10,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: '#fff',
                marginRight: 10,
              }}
              source={require('../assets/search-normal.png')}
            />
            <TextInput
              style={{color: '#fff'}}
              placeholderTextColor={'grey'}
              placeholder={'Search For Your Task'}
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: '#8875FF',
            marginVertical: 20,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>Current Tasks</Text>
        </View>
        <View>
          {sortedData
            .filter(item => {
              console.log('object,', item);
              return item?.title
                ?.toLowerCase()
                ?.includes(search?.toLowerCase());
            })
            .map((item, index) => {
              const category = tagCategories.find(
                i => i?.name == item?.category,
              );
              console.log(item, 'item');
              return (
                <TouchableOpacity
                  onPress={() => {
                    NavService.navigate('CurrentTask', {item});
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: '#363636',
                    marginBottom: 15,
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#fff', margin: 10, fontSize: 20}}>
                      {item.title}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        let newArr = [...sortedData];
                        const deletedData = newArr.splice(index, 1);
                        console.log(deletedData, 'deleted');
                        dispatch(saveTask(newArr));
                        deleteTask(deletedData[0]?.id);
                        console.log('newArr', newArr);
                      }}>
                      <Image
                        style={{
                          height: 20,
                          width: 20,
                          resizeMode: 'contain',
                          tintColor: 'red',
                          marginEnd: 10,
                        }}
                        source={require('../assets/delete.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        flex: 1,
                        color: '#fff',
                        marginBottom: 10,
                        marginHorizontal: 10,
                      }}>
                      {item?.date ? new Date().toDateString(item?.date) : null}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 5,
                      }}>
                      <View
                        style={{
                          padding: 5,
                          marginHorizontal: 10,
                          borderWidth: 1,
                          borderColor: '#8875ff',
                          borderRadius: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{
                            width: 15,
                            height: 15,
                            resizeMode: 'contain',
                            marginRight: 5,
                          }}
                          source={category?.icon}
                        />
                        <Text
                          style={{
                            color: category?.tagColor
                              ? category?.tagColor
                              : 'white',
                          }}>
                          {category?.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          padding: 5,
                          marginRight: 10,
                          borderWidth: 1,
                          borderColor: '#8875ff',
                          borderRadius: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Image
                          style={{
                            height: 15,
                            width: 15,
                            resizeMode: 'contain',
                            marginRight: 5,
                          }}
                          source={require('../assets/flag.png')}
                        />
                        <Text style={{color: '#fff'}}>{item?.priority}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskPage;
