import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('screen');

const ContentList = height / 2;

const CardImgBtn = ({item, onClick}) => {
  return (
    <TouchableOpacity
      style={{
        height: ContentList / 2.5,
        width: ContentList / 3,
        borderColor: '#fff',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: '6%',
      }}
      onPress={() => onClick(item)}>
      <Image
        source={{
          uri: item.imgUrl,
        }}
        style={{height: '100%', width: '100%', borderRadius: 30}}
        resizeMode="stretch"
      />
      <Text
        style={{
          position: 'absolute',
          color: 'rgba(255,255,255,0.7)',
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default CardImgBtn;
