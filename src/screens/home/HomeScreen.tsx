import React from 'react';
import {TextInput, View, Button} from 'react-native';
import {inject, observer} from "mobx-react";

const HomeScreeen: React.FC = ({AppStore, navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title='button' onPress={() => navigation.navigate('AuthScreen')}/>
    </View>
  );
};

export default inject('AppStore')(observer(HomeScreeen));
