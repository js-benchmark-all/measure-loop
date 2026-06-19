import { env } from 'measure-loop';
import reporter from 'measure-loop/reporter/md';
import main from './main.ts';

const res = await main.run({ env, reporter });
console.log(res);
