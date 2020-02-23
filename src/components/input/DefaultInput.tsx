import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {width} from '../../constants';

const DefaultInput: React.FC<TextInputProps> = props => {
  const {placeholder, value, onChangeText, style} = props;
  return (
    <TextInput
      value={value}
      style={[styles.wrapper, style]}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 50,
    width: width * 0.8,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default DefaultInput;
