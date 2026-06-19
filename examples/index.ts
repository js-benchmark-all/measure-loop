import { env } from 'measure-loop';
import reporter from 'measure-loop/reporter';
import main from './main.ts';

await main.run({ env, reporter });
