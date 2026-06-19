import { env } from 'measure-loop';
import reporter from 'measure-loop/reporter/json';
import main from './main.ts';

const res = await main.run({ env, reporter });
console.log(JSON.stringify(res, null, 2));
