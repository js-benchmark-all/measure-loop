import { Bench } from 'tinybench';

import { formatHz } from 'measure-loop/reporter/utils';

const result = new Bench().add('noop', () => {}).runSync()[0].result;
if (result.state !== 'completed') throw '';

console.log(
  'tinybench:',
  formatHz(1e3 / result.latency.mean),
  '-',
  result.latency.samplesCount,
  'calls',
);
