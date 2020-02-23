import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {width} from '../../constants';

interface Button extends TouchableOpacityProps {
  title: string,
}

const DefaultButton: React.FC<Button> = ({style, onPress, title}) => (
  <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#828282',
    height: 50,
    width: width * 0.8,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#eee',
    fontSize: 20,
  },
});

export default DefaultButton;
