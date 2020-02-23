import {observable, action} from 'mobx';
import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {Alert} from 'react-native';

export default class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable isLoading: boolean = false;
  @observable isAuthorised: boolean = false;

  @action apiFetch = async (fetch: AxiosRequestConfig) => {
    this.isLoading = true;
    const {url, method, data, params} = fetch;
    return axios({
      method,
      url,
      data,
      params,
    })
      .then((response: AxiosResponse) => {
        this.isLoading = false;
        switch (response.status) {
          case 403:
            Alert.alert('Error', response.data.message, [{text: 'OK'}], {
              cancelable: false,
            });
            return 0;
          case 422:
            Alert.alert(
              response.data.message,
              response.data.fields.email[0],
              [{text: 'OK'}],
              {
                cancelable: false,
              },
            );
            return 0;
          default:
            return response.data;
        }
      })
      .catch((error: AxiosError) => {
        this.isLoading = false;
        console.log('ERROR', error);
        Alert.alert('Error', 'Something go wrong!', [{text: 'OK'}], {
          cancelable: false,
        });
      });
  };
}
