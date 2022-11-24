import {View, Text, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = props => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#fff', paddingBottom: 10}}>{props.label}</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#979797',
          backgroundColor: '#1D1D1D',
          paddingVertical: 15,
          borderRadius: 5,
          paddingHorizontal: 10,
        }}>
        <TextInput
          style={{color: '#fff'}}
          placeholderTextColor={'grey'}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomTextInput;
