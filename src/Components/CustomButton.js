import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#8875FF',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 5,
          // marginVertical: 40,
          borderWidth: 1,
          borderColor: '#8875FF',
        },
        props.containerStyle,
      ]}
      {...props}>
      <Text style={{color: '#fff'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
