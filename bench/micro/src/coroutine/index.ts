import { category } from 'measure-loop';

import overhead from './overhead.ts';
import async_iterable from './async-iterable.ts';

export default category()
  .it('overhead', overhead)
  .it('async iterable', async_iterable);
