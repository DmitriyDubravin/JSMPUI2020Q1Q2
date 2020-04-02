class Addictive {
  behavior() {
    return "flushes his life";
  }
}

class Alcoholic extends Addictive {
  alcoholicBehavior() {
    return "drinks too much";
  }
}

class Junkie extends Addictive {
  junkieBehavior() {
    return "stabs himself";
  }
}

// --- --- --- //

class Gamer extends Addictive {
  behavior() {
    return "spends money and time";
  }
}
class Workaholic extends Addictive {
  behavior() {
    return "doesn't rest properly";
  }
}
