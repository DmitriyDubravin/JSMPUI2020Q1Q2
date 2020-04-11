import { Currency } from "./interfaces";

export default {
  async get(url: string): Promise<Currency[]> {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      return [];
    }
  },
};
