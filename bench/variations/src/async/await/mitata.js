// @ts-check
import { measure, do_not_optimize } from 'mitata';

import { printRuns } from '../../../result.js';

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

printRuns(result.samples);
