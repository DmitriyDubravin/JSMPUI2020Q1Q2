class TypedMentee {
  constructor(public name: string, public type: string) {}
}

class OvertiredMentor {
  checkTaskReadiness(mentee: TypedMentee, taskBasicTime: number) {
    if (mentee.type === "slow") {
      return 0.5 * taskBasicTime;
    }
    if (mentee.type === "fast") {
      return 1.5 * taskBasicTime;
    }
  }
}

// --- --- --- //

interface Mentee {
  name: string;
  speed: number;
}

class SlowMentee implements Mentee {
  speed: 0.5;
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
}

class FastMentee implements Mentee {
  speed: 1.5;
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
}

class Mentor {
  checkTaskReadiness(mentee: Mentee, taskBasicTime: number) {
    return mentee.speed * taskBasicTime;
  }
}
