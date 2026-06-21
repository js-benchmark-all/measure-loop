import type { VTable } from './utils.ts';

type LRU = [
  num: number,
  capacity: number,
  cur: Record<string, any>,
  prev: Record<string, any>,
];

const reset = (lru: LRU) => {
  lru[0] = 1;
  lru[2] = Object.create(null);
};

const keep = (lru: LRU, key: string, value: any) => {
  if (lru[0]++ === lru[1]) {
    lru[3] = lru[2];
    reset(lru);
  }
  lru[2][key] = value;
};

const vtable: VTable<LRU> = {
  init: (capacity) => [
    0,
    capacity,
    Object.create(null),
    Object.create(null),
  ],
  get: (lru, key) => {
    let val = lru[2][key];
    if (val != null) return val;

    val = lru[3][key];
    if (val != null) {
      keep(lru, key, val);
      return val;
    }
  },
  set: (lru, key, value) => {
    if (lru[2][key] != null) {
      lru[2][key] = value;
    } else keep(lru, key, value);
  },
};

export default vtable;
