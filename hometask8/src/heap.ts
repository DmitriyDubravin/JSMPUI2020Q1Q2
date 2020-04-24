import { Job } from "./job";

export class Heap {
  heap: Job[] = [{ priority: 0, time: 0 }];
  constructor() {}

  size(): number {
    return this.heap.length;
  }

  insert(job: Job) {
    this.heap.push(job);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (
        this.heap[idx].priority >= this.heap[Math.floor(idx / 2)].priority
      ) {
        if (idx >= 1) {
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
    console.log(`---> job added ${job.priority}:${job.time}`);
  }

  remove() {
    let job = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1].priority < this.heap[2].priority) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return job;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left].priority > this.heap[right].priority) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        }
      }
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return job;
  }
}
