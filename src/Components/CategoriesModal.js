import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import {tagCategories} from './TagCategories';

const {width} = Dimensions.get('screen');

const CategoriesModal = props => {
  const {isVisible, setIsVisible, addCategories, setCategory} = props;
  return (
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
          <Text style={{marginBottom: 10, color: '#fff'}}>Choose Category</Text>
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
                  onPress={() => {
                    setCategory(item.name);
                    setIsVisible(false);
                  }}
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
                      // tintColor:
                      //   index + 1 === tagCategories.length && '#00a369',
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
                setIsVisible(false);
                addCategories();
              }}
              title="Add Categories"
              containerStyle={{marginTop: 20}}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CategoriesModal;
