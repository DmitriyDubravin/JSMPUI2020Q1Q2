interface OverloadedMenu {
  drinks(): string[];
  dishes(): string[];
  meatDishes(): string[];
  vegetarianDishes(): string[];
  all(): string[];
}

// --- --- --- //

interface Menu {
  drinks(): string[];
  dishes(): string[];
  all(): string[];
}

interface MeatMenu extends Menu {
  meatDishes(): string[];
}

interface VegetarianMenu extends Menu {
  vegetarianDishes(): string[];
}

class CafeMenu implements Menu {
  drinks() {
    return ["juice", "martini"];
  }
  dishes() {
    return ["hamburger", "pizza"];
  }
  all() {
    return [...this.drinks(), ...this.dishes()];
  }
}

class CafeVegetarianMenu extends CafeMenu implements VegetarianMenu {
  vegetarianDishes() {
    return ["eggs", "salad"];
  }
  all() {
    return [...super.all(), ...this.vegetarianDishes()];
  }
}
class CafeMeatMenu extends CafeMenu implements MeatMenu {
  meatDishes() {
    return ["steak", "ribs"];
  }
  all() {
    return [...super.all(), ...this.meatDishes()];
  }
}

class Client {
  flavor: string = "any";
  menu: Menu = new CafeMenu();
  constructor(flavor: string, menu: Menu) {
    this.flavor = flavor;
  }
  order() {
    return this.menu.all().filter(dish => dish === this.flavor);
  }
}

class MeatClient extends Client {
  constructor() {
    super("meat", new CafeMeatMenu());
  }
}

class VegeterianClient extends Client {
  constructor() {
    super("vegetable", new CafeVegetarianMenu());
  }
}
