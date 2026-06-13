import { measure } from 'mitata';

import { formatHz } from 'measure-loop/reporter/utils';

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const cpu = await measure(() => {}, { batch_unroll: 1 });
console.log('mitata:', formatHz(1e9 / cpu.avg), '-', cpu.ticks, 'calls');

writeFileSync(join(import.meta.dirname, 'mitata-debug.js'), cpu.debug);
