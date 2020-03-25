import idGenerator from "./idGenerator";
import {
  Shipper,
  AirEastShipper,
  ChicagoSprintShipper,
  PacificParcelShipper
} from "./shipper";
import { ShipmentTypes } from "./enums";

export interface IShipment {
  ship(): string;
}

export class Shipment implements IShipment {
  private shipmentId: number;
  private shipper: Shipper;
  private shipmentType: string;
  private cost: number;

  constructor(
    shipmentId: number = idGenerator.generate(),
    private toAddress: string,
    private fromAddress: string,
    private toZipCode: number,
    private fromZipCode: number,
    private weight: number
  ) {
    this.shipmentId = shipmentId === 0 ? idGenerator.generate() : shipmentId;
    this.shipper = getShipper(this.fromZipCode);
    this.shipmentType = getShipmentType(this.weight);
    this.cost = this.shipper.getCost(this.weight, this.shipmentType);
  }

  getShipmentId(): number {
    return this.shipmentId;
  }

  ship(): string {
    return `Shipment with the ID ${this.shipmentId} will be picked up from ${this.fromAddress} ${this.fromZipCode} and shipped to ${this.toAddress} ${this.toZipCode}
    Cost: ${this.cost}`;
  }
}

function getShipper(zipCode: number) {
  if (zipCode >= 70000) return new PacificParcelShipper();
  if (zipCode >= 40000) return new ChicagoSprintShipper();
  return new AirEastShipper();
}

function getShipmentType(weight: number): string {
  if (weight < 15) return ShipmentTypes.Letter;
  if (weight < 160) return ShipmentTypes.Package;
  return ShipmentTypes.Oversized;
}
