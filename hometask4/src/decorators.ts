import { IShipment } from "./shipment";

export class Decorator implements IShipment {
  protected component: IShipment;
  constructor(component: IShipment) {
    this.component = component;
  }
  public ship(): string {
    return this.component.ship();
  }
}
export class FragileShipment extends Decorator {
  ship(): string {
    return `${super.ship()}
        **MARK FRAGILE**
    `;
  }
}

export class DontLeaveShipment extends Decorator {
  ship(): string {
    return `${super.ship()}
        **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**
    `;
  }
}

export class ReturnShipment extends Decorator {
  ship(): string {
    return `${super.ship()}
        **MARK RETURN RECEIPT REQUESTED**
    `;
  }
}
