import { category } from 'measure-loop';

import cpu from './cpu.ts';
import object from './object/index.ts';
import array from './array/index.ts';
import coroutine from './coroutine/index.ts';
import lru from './lru/index.ts';
import webApis from './web-apis/index.ts';

export default category()
  .it('cpu', cpu)
  .it('object', object)
  .it('array', array)
  .it('coroutine', coroutine)
  .it('lru', lru)
  .it('Web APIs', webApis);
