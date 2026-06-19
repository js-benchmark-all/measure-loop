import { category } from 'measure-loop';
import access from './access.ts';
import init from './init.ts';

export default category()
  .it('access', access)
  .it('init', init);
