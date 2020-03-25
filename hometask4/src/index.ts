import { Shipment } from "./shipment";
import {
  FragileShipment,
  DontLeaveShipment,
  ReturnShipment
} from "./decorators";

const shipment1 = new ReturnShipment(
  new FragileShipment(
    new DontLeaveShipment(
      new Shipment(
        0,
        "1313 Mockingbird Lane, Tulsa, OK",
        "12292 4th Ave SE, Bellevue, Wa",
        17721,
        12021,
        180
      )
    )
  )
);
const shipment2 = new Shipment(
  123,
  "1313 Mockingbird Lane, Tulsa, OK",
  "12292 4th Ave SE, Bellevue, Wa",
  47721,
  42021,
  15
);
const shipment3 = new Shipment(
  0,
  "1313 Mockingbird Lane, Tulsa, OK",
  "12292 4th Ave SE, Bellevue, Wa",
  87721,
  82021,
  16
);

// new Letter(args)

console.log(shipment1.ship());
console.log(shipment2.ship());
console.log(shipment3.ship());
