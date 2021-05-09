import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, ImageCover, ButtonWithLabel} from '../components';
import {uploadAllCharacter, restartCharacter} from '../Reducer/action';
import {useDispatch, useSelector} from 'react-redux';
import ProfileData from '../../defaultAttribute';

const Result = ({navigation}) => {
  const dispatch = useDispatch();
  const [showResult, setshowResult] = React.useState(false);
  const [result, setresult] = React.useState('');
  const [result2, setresult2] = React.useState('');
  const [win, setWin] = React.useState('');
  const userCharacter = useSelector(state => state.selectedCharacter);
  const cpuCharacter = useSelector(state => state.cpuCharacters);

  useEffect(() => {
    CheckResult();
    setTimeout(() => {
      setshowResult(true);
    }, 3000);
  }, []);

  const handleSelectedInput = () => {
    dispatch(restartCharacter());
    navigation.navigate('StartNow');
  };
  const CheckResult = () => {
    let item1 = userCharacter;
    let item2 = cpuCharacter;
    let winCpu = 0;
    let winUsr = 0;
    if (item1[0].powerLevel > item2[0].powerLevel) {
      if (item1[0].weakness === item2[0].name) {
        setresult(item2[0].name + ' Defeated ' + item1[0].name);
        winCpu++;
      } else {
        setresult(item1[0].name + ' Defeated ' + item2[0].name);
        winUsr++;
      }
    } else {
      if (item2[0].weakness === item1[0].name) {
        setresult(item1[0].name + ' Defeated ' + item2[0].name);
        winUsr++;
      } else {
        setresult(item2[0].name + ' Defeated ' + item1[0].name);
        winCpu++;
      }
    }

    if (item1[1].powerLevel > item2[1].powerLevel) {
      if (item1[1].weakness === item2[1].name) {
        setresult2(item2[1].name + ' Defeated ' + item1[1].name);
        winCpu++;
      } else {
        setresult2(item1[1].name + ' Defeated ' + item2[1].name);
        winUsr++;
      }
    } else {
      if (item2[1].weakness === item1[1].name) {
        setresult2(item1[1].name + ' Defeated ' + item2[1].name);
        winUsr++;
      } else {
        setresult2(item2[1].name + ' Defeated ' + item1[1].name);
        winCpu++;
      }
    }

    if (winCpu === winUsr) {
      setWin('Game Tied');
    } else if (winCpu > winUsr) {
      setWin('CPU Won');
    } else {
      setWin('User Won');
    }
  };
  if (showResult) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <ImageCover
          source={{
            uri:
              'https://i.pinimg.com/564x/60/bb/f7/60bbf78b72108bc64e19f950b4d8ffc1.jpg',
          }}
          size={200}
        />
        <View style={{marginTop: '5%', marginBottom: '15%'}}>
          <Text
            style={{
              fontFamily: 'monospace',
              color: 'rgb(255,0,0)',
              letterSpacing: 0,
              marginTop: '5%',
              textAlign: 'center',
              fontSize: 20,
            }}>
            {result}
          </Text>
          <Text
            style={{
              fontFamily: 'monospace',
              color: 'rgb(255,0,0)',
              letterSpacing: 0,
              marginTop: '5%',
              textAlign: 'center',
              fontSize: 20,
            }}>
            {result2}
          </Text>

          <Text
            style={{
              fontFamily: 'monospace',
              color: 'rgb(255,255,255)',
              letterSpacing: 0,
              marginTop: '5%',
              textAlign: 'center',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            {win}
          </Text>
        </View>
        <ButtonWithLabel
          title={'Play Again'}
          onClick={() => handleSelectedInput()}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#000',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={33} color={'#fff'} />
      </View>
    );
  }
};

export default Result;
