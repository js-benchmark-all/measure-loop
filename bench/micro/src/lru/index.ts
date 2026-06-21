import { bench, category } from 'measure-loop';
import { randomKey, resetRandom, type VTable } from './utils.ts';

import map from './map.ts';
import two_object_buckets from './two-object-buckets.ts';
import two_map_buckets from './two-map-buckets.ts';

const vtables: Record<string, VTable<any>> = {
  'map': map,
  'two object buckets': two_object_buckets,
  'two map buckets': two_map_buckets
};
const all = category();

for (const capacity of [16, 32, 128, 512]) {
  const set_new_keys_bench = bench();

  for (const name in vtables) {
    // Predictable keys
    resetRandom();

    let { init, get, set } = vtables[name];

    // set
    {
      let lru = init(capacity);
      set_new_keys_bench.it(name, [randomKey], (key) => {
        set(lru, key, key);
      });
    }
  }

  all.it(
    `capacity ${capacity}`, category()
      .it('set new keys', set_new_keys_bench)
  );
}

export default all;
