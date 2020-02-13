import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {inject, observer} from "mobx-react";

const AuthScreeen: React.FC = ({AppStore, navigation}) => {
  const [username, setUsername] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button
        title="button"
        onPress={() => {
          AppStore.isAuthorised = true
        }}
      />
    </View>
  );
};

export default inject('AppStore')(observer(AuthScreeen));
