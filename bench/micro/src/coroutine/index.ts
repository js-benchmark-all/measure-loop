import { category } from 'measure-loop';
import overhead from './overhead.ts';
import asyncIterable from './async-iterable.ts';

export default category()
  .it('overhead', overhead)
  .it('async iterable', asyncIterable);
