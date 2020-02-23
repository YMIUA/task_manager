import {action, observable} from 'mobx';
import axios from 'axios'

export default class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email: string = '';
  @observable password: string = '';
  @observable token: string = '';


  @action register = async () => {
    const response = await this.rootStore.AppStore.apiFetch({
      method: 'post',
      url: 'users',
      data: {
        email: this.email,
        password: this.password,
      },
    });
    if (typeof response.token === 'string') {
      this.token = response.token;
    }
  };

  @action auth = async () => {
    const response = await this.rootStore.AppStore.apiFetch({
      method: 'post',
      url: 'auth',
      data: {
        email: this.email,
        password: this.password,
      },
    });
    if (typeof response.token === 'string') {
      this.token = response.token;
    }
  };
}
