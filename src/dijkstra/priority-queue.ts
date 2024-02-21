import { PriorityQueueValue } from "../types/adjacent-types";

export default class PriorityQueue {
  values: PriorityQueueValue[] = [];

  enqueue(val: string, priority: number) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue(): PriorityQueueValue {
    return this.values.shift();
  }

  sort(): PriorityQueueValue[] {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
