import { Currency } from "./interfaces";

export default {
  async get(url: string): Promise<Currency[]> {
    const response = await fetch(url);
    return await response.json();
  }
};
