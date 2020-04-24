import { Heap } from "./heap";
import { Job } from "./job";

export class PriorityQueue {
  heap: Heap;
  constructor(heap: Heap) {
    this.heap = heap;
  }

  enqueue(job: Job) {
    this.heap.insert(job);
  }
  dequeue(): Job {
    return this.heap.remove();
  }
  isQueue(): boolean {
    return this.heap.size() > 1;
  }
}
