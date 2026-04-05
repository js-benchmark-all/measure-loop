// @ts-check
import { measure, do_not_optimize } from 'mitata';

import { print } from '../../math.js';
import { DIGITS, randstring } from '../../random.js';

const result = await measure(
  function* () {
    yield {
      0: () => randstring(DIGITS, 20),
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

print(result.samples, 4096);
