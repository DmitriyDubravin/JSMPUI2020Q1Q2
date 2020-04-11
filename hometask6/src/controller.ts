import { store } from "./store";
import { multiply, divide } from "./helpers";
import { FieldNames, splitter } from "./enums";

function recountCurrencyItem(currency: string, item: object) {
  return {
    ...store.state,
    items: {
      ...store.state.items,
      [currency]: {
        ...store.state.items[currency],
        ...item,
      },
    },
  };
}

export const updateField = (fieldname: string, value: number) => {
  const [currency, name] = fieldname.split(splitter);

  const fieldsChanges: { [name: string]: object } = {
    [FieldNames.rate]: {
      rate: value,
      toCur: multiply(store.state.items[currency].cur, value),
    },
    [FieldNames.cur]: {
      cur: value,
      toCur: multiply(store.state.items[currency].rate, value),
    },
    [FieldNames.toCur]: {
      cur: divide(value, store.state.items[currency].rate),
      toCur: value,
    },
  };

  store.update(recountCurrencyItem(currency, fieldsChanges[name]));
};

export const updateMode = (value: string) => {
  store.update({ ...store.state, mode: value });
};
