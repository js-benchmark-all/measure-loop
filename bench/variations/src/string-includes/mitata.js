// @ts-check
import { measure, do_not_optimize } from 'mitata';

import { print } from '../../math.js';

const result = await measure(
  function* () {
    yield {
      0: () => '' + Math.random(),
      /**
       * @param {string} str
       */
      bench: (str) => {
        do_not_optimize(str.includes('a'));
      },
    };
  },
  {
    inner_gc: true,
  },
);

print('runs', result.samples, 4096);
