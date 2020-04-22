import { Enum } from "./interfaces";

export const enumToArray = (e: Enum): string[] =>
  Object.keys(e).map((item) => e[item]);

export const checkEven = (num: number) => num % 2 === 0;
