import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
const {height} = Dimensions.get('screen');
const ImageWH = height * 0.5;

const Heading = ({source, size}) => {
  return (
    <Image
      source={source}
      style={{
        height: size || ImageWH,
        width: size || ImageWH,
        borderRadius: size / 2 || ImageWH / 2,
        marginVertical: '10%',
      }}
      resizeMode="stretch"
    />
  );
};

export default Heading;
