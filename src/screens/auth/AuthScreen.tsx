import React from 'react';
import {
  Button,
  Switch,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {DefaultInput} from '../../components/input';
import {DefaultButoon} from '../../components/buttons';
import {width} from '../../constants';

const AuthScreen: React.FC = ({AppStore, AuthStore,navigation}) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setUPassword] = React.useState<string>('');
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const onHandleClick = async () => {
    AuthStore.email = username;
    AuthStore.password = password;
    await (isLogin ? AuthStore.register() : AuthStore.auth());
    if(AuthStore.token.length){
      AppStore.isAuthorised = true
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>{isLogin ? 'Register' : 'Log in'}</Text>
      <DefaultInput
        value={username}
        onChangeText={setUsername}
        placeholder={'E-mail'}
        style={{marginVertical: 10}}
      />
      <DefaultInput
        value={password}
        onChangeText={setUPassword}
        placeholder={'Password'}
        style={{marginVertical: 10}}
      />
      <View style={styles.switcherWrapper}>
        <Text style={styles.switcherText}>Login/Register</Text>
        <Switch value={isLogin} onValueChange={() => setIsLogin(!isLogin)} />
      </View>
      <DefaultButoon title={isLogin ? 'Register' : 'Log in'} onPress={onHandleClick}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  title: {
    fontSize: 22,
    color: '#555',
    marginBottom: 30,
  },
  switcherWrapper: {
    flexDirection: 'row',
    width: width * 0.8,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  switcherText: {
    fontSize: 18,
    color: '#555',
  },
});

export default inject('AppStore', 'AuthStore')(observer(AuthScreen));
