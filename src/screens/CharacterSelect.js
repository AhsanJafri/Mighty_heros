import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import {Font} from '../constants/themes';
import {Heading, ImageCover, ButtonWithLabel, CardImgBtn} from '../components';
import {uploadCompCharacted, uploadSelectedCharacter} from '../Reducer/action';
import {useSelector, useDispatch} from 'react-redux';
import {getRandomInt} from '../helper/helperFunction';
import defaultAttribute from '../../defaultAttribute';

const {height} = Dimensions.get('screen');

const ContentList = height / 2;

const CharacterSelect = ({navigation}) => {
  const dispatch = useDispatch();

  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const AllChactacter = useSelector(state => state.characterData);

  const a = useSelector(state => state);
  const handleClickInput = item => {
    if (selectedCharacter.length < 2) {
      let match = false;
      selectedCharacter.map(o => {
        if (o.id === item.id) {
          alert('Character Already Selected');
          match = true;
          return;
        }
      });
      if (!match) {
        setSelectedCharacter([...selectedCharacter, item]);
      }
    } else {
      alert('Already Selected 2 Card');
    }
  };

  const handleSelectedInput = () => {
    dispatch(uploadSelectedCharacter(selectedCharacter));
    let temp = [
      defaultAttribute[getRandomInt(5)],
      defaultAttribute[getRandomInt(5)],
    ];

    dispatch(uploadCompCharacted(temp));
    console.log(a);
    navigation.navigate('MatchScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <View style={{marginTop: '5%'}}>
        <Heading text1={'Mighty'} text2={'Heros'} />
      </View>
      <View style={{marginTop: '5%'}}>
        <Heading text1={'Select Your'} text2={'Characters'} size={22} />
        <Text
          style={{
            fontFamily: 'monospace',
            color: 'rgb(255,0,0)',
            letterSpacing: 0,
            marginTop: '5%',
            textAlign: 'center',
          }}>
          {selectedCharacter.length} Cards Selected
        </Text>
      </View>
      <View
        style={{
          height: ContentList,
          borderColor: '#fff',
          width: '100%',
          marginTop: '5%',
        }}>
        <FlatList
          data={AllChactacter}
          keyExtractor={item => item.id}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item}) => {
            return <CardImgBtn item={item} onClick={handleClickInput} />;
          }}
          numColumns={3}
        />
      </View>
      <ButtonWithLabel
        title={'Start'}
        onClick={() => handleSelectedInput()}
        active={selectedCharacter.length !== 2}
      />
    </View>
  );
};

export default CharacterSelect;
