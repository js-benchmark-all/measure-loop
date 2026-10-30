import type { Reporter } from '../api/types.ts';
import { emptyFn } from './utils.ts';

const reporter: Reporter<void, void, void, void> = {
  start: emptyFn,
  end: emptyFn,

  categoryStart: emptyFn,
  categoryEnd: emptyFn,

  benchStart: emptyFn,

  caseStart: emptyFn,
  caseResult: emptyFn,
  caseError: emptyFn,

  benchEnd: emptyFn,
};

export default reporter;
