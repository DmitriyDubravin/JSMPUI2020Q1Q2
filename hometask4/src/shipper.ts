import { ShipmentTypes } from "./enums";

export interface Shipper {
  getCost(weight: number, type: string): number;
}

interface Prices {
  [type: string]: () => number;
}

const roundPrice = (price: number) => {
  return +price.toFixed(2);
};

export class AirEastShipper implements Shipper {
  getCost(weight: number, type: string): number {
    const prices: Prices = {
      [ShipmentTypes.Letter]: () => weight * 0.39,
      [ShipmentTypes.Package]: () => weight * 0.25,
      [ShipmentTypes.Oversized]: () => weight * 0.25 + 10
    };
    return roundPrice(prices[type]());
  }
}

export class ChicagoSprintShipper implements Shipper {
  getCost(weight: number, type: string): number {
    const prices: Prices = {
      [ShipmentTypes.Letter]: () => weight * 0.42,
      [ShipmentTypes.Package]: () => weight * 0.2,
      [ShipmentTypes.Oversized]: () => weight * 0.2
    };
    return roundPrice(prices[type]());
  }
}

export class PacificParcelShipper implements Shipper {
  getCost(weight: number, type: string): number {
    const prices: Prices = {
      [ShipmentTypes.Letter]: () => weight * 0.51,
      [ShipmentTypes.Package]: () => weight * 0.19,
      [ShipmentTypes.Oversized]: () => weight * 0.19 + weight * 0.02
    };
    return roundPrice(prices[type]());
  }
}
