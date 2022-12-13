import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const flagButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PriorityModal = props => {
  const {isVisible, setIsVisible, onSave} = props;
  const [priority, setPriority] = useState(1);
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
          <Text style={{marginBottom: 10, color: '#fff'}}>Task Priority</Text>
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
                    backgroundColor: priority === item ? '#8875FF' : '#272727',
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
                  <Text style={{color: '#fff', paddingTop: 10}}>{item}</Text>
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
              onPress={() => {
                onSave(priority);
              }}
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
  );
};

export default PriorityModal;
