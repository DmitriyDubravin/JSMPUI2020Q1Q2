import { IJob } from "./interfaces";

export class Job implements IJob {
  priority: number;
  time: number;
  constructor(priority: number, time: number) {
    this.priority = priority;
    this.time = time;
  }
}
