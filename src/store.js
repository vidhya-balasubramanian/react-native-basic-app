import { action, computed, observable, makeAutoObservable } from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  @observable value = 1;

  @computed get getCount() {
    return this.value;
  }

  @action updateCount() {
    this.value++;
  }
}
export default new Store();
