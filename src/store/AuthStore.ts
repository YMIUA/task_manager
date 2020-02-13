import {observable} from 'mobx';

export default class AuthStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email: string = '';
  @observable password: string = '';

}
