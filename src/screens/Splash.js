import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, ImageCover} from '../components';
import {uploadAllCharacter} from '../Reducer/action';
import {useDispatch} from 'react-redux';
import ProfileData from '../../defaultAttribute';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('StartNow');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <ImageCover
        source={{
          uri:
            'https://i.pinimg.com/564x/60/bb/f7/60bbf78b72108bc64e19f950b4d8ffc1.jpg',
        }}
      />
      <Heading text1={'Mighty'} text2={'Heros'} />
    </View>
  );
};

export default Splash;
