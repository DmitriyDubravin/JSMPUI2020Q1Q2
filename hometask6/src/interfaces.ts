export interface Currency {
  name: string;
  rate: number;
}

export interface CurrencyItem {
  name: string;
  rate: number;
  cur: number;
  toCur: number;
}

export interface State {
  mode: string;
  items: {
    [type: string]: CurrencyItem;
  };
}
