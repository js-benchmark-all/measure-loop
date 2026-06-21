export interface VTable<LRU> {
  init: (capacity: number) => LRU;
  get: (lru: LRU, key: string) => unknown;
  set: (lru: LRU, key: string, value: any) => void;
}

let randomSeed: number;
const randomNumber = () => {
  randomSeed = (randomSeed! + 0x6d2b79f5) >>> 0;
  let t = randomSeed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
export const setupRandomSeed = () => {
  randomSeed = 0x9e3779b9 >>> 0;
};

export const randomKey = () =>
  randomNumber().toString(36).slice(2).padEnd(11);
