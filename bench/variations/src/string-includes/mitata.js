// @ts-check
import { measure, do_not_optimize } from 'mitata';

import { printRuns } from '../../result.js';
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

printRuns(result.samples, true);
