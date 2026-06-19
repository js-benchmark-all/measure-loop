import { category } from 'measure-loop';
import cpu from './cpu.ts';
import object from './object/index.ts';
import coroutine from './coroutine/index.ts';

export default category()
  .it('cpu', cpu)
  .it('object', object)
  .it('coroutine', coroutine);
