import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonWithLabel = ({title, size, color, onClick, active}) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
        backgroundColor: color || 'rgba(0,0,120,1)',
        justifyContent: 'center',
        alignItems: 'center',
        height: size || 50,
        borderRadius: size / 2 || 25,
      }}
      disabled={active || false}
      onPress={onClick}>
      <Text
        style={{
          fontFamily: 'monospace',
          color: '#fff',
          fontSize: size * 0.7 || 20,
          textDecorationLine: active ? 'line-through' : '',
          textDecorationStyle: 'solid',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonWithLabel;
