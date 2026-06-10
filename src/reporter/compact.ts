import type { Reporter } from '../runner/category.ts';

export const compact: Reporter<string> = {
  start: () => '  ',

  benchStart: (catId, tab) => {
    console.log(tab + catId + ':');
    return tab + '  ';
  },
  benchResult: (keyId, tab, { runtimes, gcs }) => {
    if (runtimes.length === 0) {
      console.warn(tab + '+ ' + keyId + ': no result');
      return;
    }

    console.log(tab + '+ ' + keyId + ':');
    tab += '  ';

    {
      runtimes.sort();

      {
        let avg = 0;
        for (let i = 0; i < runtimes.length; i++) avg += runtimes[i];
        console.log(tab + '* avg:', avg / runtimes.length);
      }
      console.log(tab + '* min:', runtimes[0]);
      console.log(tab + '* max:', runtimes[runtimes.length - 1]);
    }

    if (gcs.length > 0) {
      gcs.sort();

      {
        let avg = 0;
        for (let i = 0; i < gcs.length; i++) avg += gcs[i];
        console.log(tab + '* gc avg:', avg / gcs.length);
      }
      console.log(tab + '* gc min:', gcs[0]);
      console.log(tab + '* gc max:', gcs[gcs.length - 1]);
    }
  },
  benchError: (key, tab) => {
    console.error(tab + '- ' + key);
  },
  benchEnd: () => {},

  end: () => {},
};

export default compact;
