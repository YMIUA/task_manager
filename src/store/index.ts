import {API} from './../../env';
import axios from 'axios';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import TaskStore from './TaskStore';

class Store {
  constructor() {
    this.AppStore = new AppStore(this);
    this.AuthStore = new AuthStore(this);
    this.TaskStore = new TaskStore(this);
    axios.defaults.baseURL = API;
    this.onStart();
  }

  onStart = async () => {
    //some async actions
  };
}

export default Store;
