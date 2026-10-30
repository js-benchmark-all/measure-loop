import type { Params } from '../measure.ts';
export const list = <const P extends Params>(...params: P): P =>
    params,
  ref =
    <T>(v: T): (() => T) =>
    () =>
      v;
