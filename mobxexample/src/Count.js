import { makeObservable , observable, computed, action } from 'mobx'

class Count {
    count = 0;
    get doubleCount() {
      return this.count * 2;
    }
    constructor(count) {
      makeObservable(this, {
        count: observable,
        doubleCount: computed,
        increment: action
      });
      this.count = count;
    }
  
  increment() {
      this.count++;
    }
  }
  
  export const store = new Count(1);