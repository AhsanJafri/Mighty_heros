import React, {useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, ImageCover, ButtonWithLabel, CardImgBtn} from '../components';
import {uploadAllCharacter} from '../Reducer/action';
import {useDispatch, useSelector} from 'react-redux';
import ProfileData from '../../defaultAttribute';

const {height, width} = Dimensions.get('screen');
const MatchScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const userCharacter = useSelector(state => state.selectedCharacter);
  const cpuCharacter = useSelector(state => state.cpuCharacters);
  console.log(userCharacter, cpuCharacter);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <View style={{marginTop: '10%'}}>
        <Heading text1={'Mighty'} text2={'Heros'} />
      </View>

      <View
        style={{
          height: height / 3.5,
          width: '90%',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CardImgBtn
          item={userCharacter[0]}
          onClick={() => console.log('yes')}
        />
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 32}}>
          VS
        </Text>

        <CardImgBtn item={cpuCharacter[0]} onClick={() => console.log('yes')} />
      </View>

      <View
        style={{
          height: height / 3.5,
          width: '90%',
          marginTop: '2%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '5%',
        }}>
        <CardImgBtn
          item={userCharacter[1]}
          onClick={() => console.log('yes')}
        />
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 32}}>
          VS
        </Text>

        <CardImgBtn item={cpuCharacter[1]} onClick={() => console.log('yes')} />
      </View>
      <ButtonWithLabel
        title={'Check Result'}
        onClick={() => navigation.navigate('Result')}
      />
    </View>
  );
};

export default MatchScreen;
