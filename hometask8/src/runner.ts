import { PriorityQueue } from "./priority-queue";

export class Runner {
  queue: PriorityQueue;
  constructor(queue: PriorityQueue) {
    this.queue = queue;
  }
  async run() {
    if (this.queue.isQueue()) {
      const job = this.queue.dequeue();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, job.time);
      });
      console.log(`job with priority ${job.priority} is done in ${job.time}ms`);
      this.run();
    }
  }
}
