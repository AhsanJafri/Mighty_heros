import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, ImageCover, ButtonWithLabel} from '../components';
import {uploadAllCharacter} from '../Reducer/action';
import {useDispatch} from 'react-redux';
import ProfileData from '../../defaultAttribute';

const StartNow = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'space-evenly',
      }}>
      <ImageCover
        source={{
          uri:
            'https://i.pinimg.com/564x/60/bb/f7/60bbf78b72108bc64e19f950b4d8ffc1.jpg',
        }}
        size={300}
      />
      <Heading text1={'Mighty'} text2={'Heros'} />
      <ButtonWithLabel
        title={'Start Now'}
        onClick={() => navigation.navigate('CharacterSelect')}
      />
      <ButtonWithLabel
        title={'Rules'}
        onClick={() => navigation.navigate('Rules')}
      />

      <ButtonWithLabel title={'Exit'} color="#000" />
    </View>
  );
};

export default StartNow;
