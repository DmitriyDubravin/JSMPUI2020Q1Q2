import { Job } from "./job";
import { Heap } from "./heap";
import { PriorityQueue } from "./priority-queue";
import { Runner } from "./runner";

const myHeap = new Heap();
const queue = new PriorityQueue(myHeap);
const runner = new Runner(queue);

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const createRandomJob = () =>
  new Job(getRandomArbitrary(1, 100), getRandomArbitrary(1, 1000));

// add some jobs
for (let i = 0; i < 10; i++) {
  queue.enqueue(createRandomJob());
}

runner.run();

// adding more jobs while runner is executing
for (let i = 1; i < 4; i++) {
  setTimeout(() => {
    queue.enqueue(createRandomJob());
  }, i * 1000);
}
