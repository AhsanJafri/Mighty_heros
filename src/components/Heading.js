import React from 'react';
import {View, Text, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');
const FontSize = height * 0.06;
const Heading = ({text1, text2, size}) => {
  return (
    <View
      style={{width: '100%', alignItems: 'center', backgroundColor: '#000'}}>
      <Text
        style={{
          fontSize: size || FontSize,
          fontFamily: 'monospace',
          color: '#fff',
          letterSpacing: 0,
        }}>
        {text1} <Text style={{color: 'rgb(255,0,0)'}}>{text2}</Text>
      </Text>
    </View>
  );
};

export default Heading;
