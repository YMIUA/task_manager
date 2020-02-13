import {observable} from 'mobx';

export default class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable isLoading: boolean = false;
  @observable isAuthorised: boolean = false;

}
