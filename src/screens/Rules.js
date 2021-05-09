import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, RuleBar} from '../components';
import {uploadAllCharacter} from '../Reducer/action';
import {useDispatch} from 'react-redux';
import ProfileData from '../../defaultAttribute';
import {Rules} from '../constants/helper';
const StartNow = ({navigation}) => {
  const dispatch = useDispatch();

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
          height: '60%',
          borderWidth: 1,
          borderColor: '#fff',
          width: '85%',
          marginTop: '5%',
          borderRadius: 10,
          marginTop: '15%',
        }}>
        <RuleBar description={Rules} />
      </View>
    </View>
  );
};

export default StartNow;
