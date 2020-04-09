import "./../app.scss";
import api from "./api";

import { Currency } from "./interfaces";

import Renderer from "./renderer";
import { store } from "./store";

class App {
  run() {
    this.getData();
  }
  async getData() {
    const data: Currency[] = await api.get("../assets/data.json");
    const renderer = new Renderer();
    store.init(data);
    renderer.renderAll(store.state);
    store.subscribe(renderer.update.bind(renderer));
  }
}

new App().run();
