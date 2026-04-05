// @ts-check
import { measure, do_not_optimize } from 'mitata';

import { print } from '../../../math.js';

const result = await measure(
  function* () {
    yield {
      0: () => Promise.resolve(0),
      /**
       * @param {Promise<number>} p
       */
      bench: async (p) => {
        do_not_optimize(await p);
      },
    };
  },
  {
    inner_gc: true,
  },
);

print(result.samples, 4096);
