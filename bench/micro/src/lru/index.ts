import { bench, category } from 'measure-loop';
import { randomKey, setupRandomSeed, type VTable } from './utils.ts';

import map from './map.ts';
import linked_list_map from './linked-list-map.ts';
import two_object_buckets from './two-object-buckets.ts';
import two_map_buckets from './two-map-buckets.ts';

const vtables: Record<string, VTable<any>> = {
  map,
  'linked list map': linked_list_map,
  'two object buckets': two_object_buckets,
  'two map buckets': two_map_buckets,
};
const all = category({
  measureGC: true,
});

for (const capacity of [8, 64, 512, 4096]) {
  const set_new_key_bench = bench(),
    get_non_expired_key = bench(),
    update_non_expired_key = bench();

  all.it(
    `capacity ${capacity}`,
    category()
      .it('set new key', set_new_key_bench)
      .it('get non-expired key', get_non_expired_key)
      .it('update non-expired key', update_non_expired_key),
  );

  for (const name in vtables) {
    // Predictable keys
    setupRandomSeed();

    let { init, get, set } = vtables[name];

    // set new keys
    {
      let lru = init(capacity);
      set_new_key_bench.it(name, [randomKey], (key) => {
        set(lru, key, key);
      });
    }

    // get non-expired keys
    {
      let lru = init(capacity);
      get_non_expired_key.it(
        name,
        [
          () => {
            const key = randomKey();
            set(lru, key, key);
            return key;
          },
        ],
        (key) => get(lru, key),
      );
    }

    // update non-expired keys
    {
      let lru = init(capacity);
      update_non_expired_key.it(
        name,
        [
          () => {
            const key = randomKey();
            set(lru, key, key);
            return key;
          },
        ],
        (key) => {
          set(lru, key, '');
        },
      );
    }
  }
}

export default all;
