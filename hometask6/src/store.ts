import { Currency, State } from "./interfaces";
import { multiply } from "./helpers";

export class Store {
  subscribers: { (state: State): void }[] = [];
  data: Currency[];
  state: State = {
    mode: "bound",
    items: {},
  };

  constructor() {}

  init(data: Currency[]) {
    this.state.items = data.reduce((acc, item) => {
      acc[item.name] = {
        name: item.name,
        rate: item.rate,
        cur: 100,
        toCur: multiply(100, item.rate),
      };
      return acc;
    }, this.state.items);
    this.update(this.state);
  }
  update(state: State) {
    this.state = state;
    // console.log('current state: ', this.state);
    this.publish();
  }
  subscribe(fn: { (state: State): void }) {
    // fn(this.state);
    this.subscribers.push(fn);
  }
  unsubscribe(fn: { (state: State): void }) {
    this.subscribers = this.subscribers.filter((subscriber) => {
      return subscriber.toString() !== fn.toString();
    });
  }
  publish() {
    this.subscribers.forEach((fn) => fn(this.state));
  }
}

export const store = (() => {
  return new Store();
})();
