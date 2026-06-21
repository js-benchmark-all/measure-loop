import type { VTable } from './utils.ts';

type LRU = [
  num: number,
  capacity: number,
  cur: Map<string, any>,
  prev: Map<string, any>,
];

const reset = (lru: LRU) => {
  lru[0] = 1;
  lru[2] = new Map();
};

const keep = (lru: LRU, key: string, value: any) => {
  if (lru[0]++ === lru[1]) {
    lru[3] = lru[2];
    reset(lru);
  }
  lru[2].set(key, value);
};

const vtable: VTable<LRU> = {
  init: (capacity) => [0, capacity, new Map(), new Map()],
  get: (lru, key) => {
    let val = lru[2].get(key);
    if (val != null) return val;

    val = lru[3].get(key);
    if (val != null) {
      keep(lru, key, val);
      return val;
    }
  },
  set: (lru, key, value) => {
    if (lru[2].has(key)) {
      lru[2].set(key, value);
    } else keep(lru, key, value);
  },
};

export default vtable;
