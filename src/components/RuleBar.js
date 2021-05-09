import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const RuleBar = ({description}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 34,
          fontFamily: 'monospace',
          marginBottom: '10%',
        }}>
        Rules
      </Text>
      {description.map(item => {
        return (
          <Text
            style={{
              color: '#fff',
              width: '90%',
              borderColor: '#fff',
              alignSelf: 'center',
              fontSize: 20,
              fontFamily: 'sans-serif',
              marginTop: '2%',
              fontStyle: 'italic',
            }}>
            {item.id + 1} - {item.rule}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default RuleBar;
