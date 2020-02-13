import {observable} from 'mobx';

export default class TaskStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable email: string = '';
  @observable password: string = '';

}
