import type { VTable } from './utils.ts';

type LRU = [capacity: number, map: Map<string, any>];

const vtable: VTable<LRU> = {
  init: (capacity) => [capacity, new Map()],
  get: (lru, key) => {
    let map = lru[1];

    let value = map.get(key);
    if (value != null) {
      map.delete(key);
      map.set(key, value);
    }
    return value;
  },
  set: (lru, key, value) => {
    let map = lru[1];

    map.delete(key);
    map.set(key, value);

    map.size > lru[0] && map.delete(map.keys().next().value!);
  },
};

export default vtable;
