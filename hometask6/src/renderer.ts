import { State } from "./interfaces";
import { updateField, updateMode } from "./controller";
import { store } from "./store";
import { divide } from "./helpers";
import { FieldNames, splitter } from "./enums";

export default class Renderer {
  curMin = 0;
  curMax = 100000;

  constructor() {
    this.handleModeChange();
  }

  handleModeChange() {
    const radios: NodeList = document.querySelectorAll('[type="radio"');
    Array.from(radios).forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const target = e.target as HTMLInputElement;
        updateMode(target.value);
      });
    });
  }

  clear(target: HTMLElement) {
    target.innerHTML = "";
  }

  update(state: State) {
    Object.values(state.items).forEach((item) => {
      const elementsRate: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        `[name="${item.name}${splitter}${FieldNames.rate}"]`
      );
      Array.from(elementsRate).forEach((el) => {
        el.value = "" + item.rate;
      });
      const elementsCur: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        `[name="${item.name}${splitter}${FieldNames.cur}"]`
      );
      Array.from(elementsCur).forEach((el) => {
        el.value = "" + item.cur;
      });
      const elementsToCur: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        `[name="${item.name}${splitter}${FieldNames.toCur}"]`
      );
      Array.from(elementsToCur).forEach((el) => {
        if (el.type === "range") {
          el.max = "" + this.curMax * item.rate;
        }
        el.value = "" + item.toCur;
      });

      const labelsRate: NodeListOf<HTMLElement> = document.querySelectorAll(
        `[id="${item.name}${splitter}${FieldNames.rate}${splitter}line"]`
      );
      Array.from(labelsRate).forEach((el) => {
        el.innerHTML = `1 Euro is ${item.rate} ${item.name}`;
      });
      const labelsCur: NodeListOf<HTMLElement> = document.querySelectorAll(
        `[id="${item.name}${splitter}${FieldNames.cur}${splitter}label"]`
      );
      Array.from(labelsCur).forEach((el) => {
        el.innerHTML = `Euro: ${item.cur}`;
      });
      const labelsToCur: NodeListOf<HTMLElement> = document.querySelectorAll(
        `[id="${item.name}${splitter}${FieldNames.toCur}${splitter}label"]`
      );
      Array.from(labelsToCur).forEach((el) => {
        el.innerHTML = `${item.name}: ${item.toCur}`;
      });
    });
  }

  renderAll(state: State) {
    console.log("rendered");

    const target: HTMLElement = document.querySelector(".app1 form");
    this.clear(target);

    const items = Object.values(state.items);

    items.forEach((item) => {
      // legend
      const legend = document.createElement("legend");
      legend.innerHTML = item.name;
      // row1
      const row1 = document.createElement("div");
      row1.classList.add("row");
      // line
      const line = document.createElement("div");
      line.classList.add("line");
      const text1 = document.createTextNode("1 Euro is ");
      const input = document.createElement("input");
      input.type = "text";
      input.value = "" + item.rate;
      input.name = `${item.name}${splitter}${FieldNames.rate}`;

      input.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value.slice(-1) !== ".") {
          updateField(target.name, +target.value);
        }
      });
      const text2 = document.createTextNode(" " + item.name);
      line.appendChild(text1);
      line.appendChild(input);
      line.appendChild(text2);
      row1.appendChild(line);
      //row2
      const row2 = document.createElement("div");
      row2.classList.add("row");
      //col1
      const col1 = document.createElement("div");
      col1.classList.add("col");
      const label1 = document.createElement("label");
      const labelText1 = document.createTextNode("Euro");
      label1.appendChild(labelText1);
      const input2 = document.createElement("input");
      input2.type = "text";
      input2.name = `${item.name}${splitter}${FieldNames.cur}`;
      input2.value = "" + item.cur;
      input2.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value.slice(-1) !== ".") {
          updateField(target.name, +target.value);

          if (store.state.mode === "bound") {
            const items = store.state.items;

            for (const item in items) {
              updateField(`${items[item].name}${splitter}cur`, +target.value);
            }
          }
        }
      });
      col1.appendChild(label1);
      col1.appendChild(input2);
      row2.appendChild(col1);
      //col2
      const col2 = document.createElement("div");
      col2.classList.add("col");
      const label2 = document.createElement("label");
      const labelText2 = document.createTextNode(item.name);
      label2.appendChild(labelText2);
      const input3 = document.createElement("input");
      input3.type = "text";
      input3.name = `${item.name}${splitter}${FieldNames.toCur}`;
      input3.value = "" + item.toCur;
      input3.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value.slice(-1) !== ".") {
          updateField(target.name, +target.value);

          if (store.state.mode === "bound") {
            const items = store.state.items;
            const newCur = "" + divide(+target.value, item.rate);
            for (const item in items) {
              updateField(
                `${items[item].name}${splitter}${FieldNames.cur}`,
                +newCur
              );
            }
          }
        }
      });
      col2.appendChild(label2);
      col2.appendChild(input3);
      row2.appendChild(col2);

      const fieldset = document.createElement("fieldset");
      fieldset.appendChild(legend);
      fieldset.appendChild(row1);
      fieldset.appendChild(row2);
      target.appendChild(fieldset);
    });

    const target2: HTMLElement = document.querySelector(".app2 form");
    this.clear(target2);

    items.forEach((item) => {
      const legend = document.createElement("legend");
      legend.innerHTML = item.name;

      // row1
      const row1 = document.createElement("div");
      row1.classList.add("row");
      const line = document.createElement("div");
      line.classList.add("line");
      line.id = `${item.name}${splitter}${FieldNames.rate}${splitter}line`;
      const text = document.createTextNode(
        `1 Euro is ${item.rate} ${item.name}`
      );
      line.appendChild(text);
      row1.appendChild(line);

      //row2
      const row2 = document.createElement("div");
      row2.classList.add("row");
      //col1
      const col1 = document.createElement("div");
      col1.classList.add("col");
      // label
      const label1 = document.createElement("label");
      const labelText1 = document.createTextNode(`Euro: ${item.cur}`);
      label1.id = `${item.name}${splitter}${FieldNames.cur}${splitter}label`;
      label1.appendChild(labelText1);
      col1.appendChild(label1);
      const input2 = document.createElement("input");
      input2.type = "range";
      input2.name = `${item.name}${splitter}${FieldNames.cur}`;
      input2.value = "" + item.cur;
      input2.min = "" + 0;
      input2.max = "" + this.curMax;
      input2.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value.slice(-1) !== ".") {
          updateField(target.name, +target.value);

          if (store.state.mode === "bound") {
            const items = store.state.items;

            for (const item in items) {
              updateField(
                `${items[item].name}${splitter}${FieldNames.cur}`,
                +target.value
              );
            }
          }
        }
      });

      col1.appendChild(input2);
      row2.appendChild(col1);

      //col2
      const col2 = document.createElement("div");
      col2.classList.add("col");

      const label2 = document.createElement("label");
      const labelText2 = document.createTextNode(`${item.name}: ${item.toCur}`);
      label2.id = `${item.name}${splitter}${FieldNames.toCur}${splitter}label`;
      label2.appendChild(labelText2);
      col2.appendChild(label2);

      const input3 = document.createElement("input");
      input3.type = "range";
      input3.min = "" + this.curMin;
      input3.max = "" + this.curMax * item.rate;
      input3.name = `${item.name}${splitter}${FieldNames.toCur}`;
      input3.value = "" + item.toCur;
      input3.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value.slice(-1) !== ".") {
          updateField(target.name, +target.value);

          if (store.state.mode === "bound") {
            const items = store.state.items;
            const newCur = "" + divide(+target.value, item.rate);
            for (const item in items) {
              updateField(
                `${items[item].name}${splitter}${FieldNames.cur}`,
                +newCur
              );
            }
          }
        }
      });
      col2.appendChild(input3);
      row2.appendChild(col2);

      const fieldset = document.createElement("fieldset");
      fieldset.appendChild(legend);
      fieldset.appendChild(row1);
      fieldset.appendChild(row2);
      target2.appendChild(fieldset);
    });
  }
}
