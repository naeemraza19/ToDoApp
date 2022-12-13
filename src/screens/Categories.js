import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import ImagePicker from 'react-native-image-crop-picker';

const colors = [
  '#C9CC41',
  '#66CC41',
  '#41CCA7',
  '#4181CC',
  '#41A2CC',
  '#CC8441',
  '#9741CC',
  '#CC4173',
  '#C9CCbb',
  '#66CCee',
  '#41CCaf',
  '#418111',
  '#41A2ab',
  '#CC84cd',
  '#974112',
  '#CC4112',
];

const chooseCategory = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
};

const Categories = props => {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        backgroundColor: '#000',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
        Create new categories
      </Text>
      <CustomTextInput label={'Category name:'} placeholder={'Category name'} />
      <Text style={{color: '#fff', marginVertical: 20}}>Category icon:</Text>
      <TouchableOpacity
        onPress={chooseCategory}
        style={{
          height: 30,
          width: '50%',
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>Choose Icon</Text>
      </TouchableOpacity>
      <View style={{paddingVertical: 20}}>
        <Text style={{color: '#fff'}}>Category color:</Text>
      </View>
      <FlatList
        data={colors}
        horizontal
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              marginRight: 10,
              backgroundColor: item,
            }}
          />
        )}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 50,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{width: '50%', alignItems: 'center'}}>
            <Text style={{color: '#8875FF'}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#8875FF',
              width: '50%',
              borderRadius: 5,
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>Create Category</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Categories;
