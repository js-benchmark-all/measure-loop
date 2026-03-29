import { print } from './detect/print.ts';

let $: any;
/**
 * Prevent a value from being optimized out.
 */
export const createSideEffect = (v: any): void => {
  $ = v;
};
$ = () => print($);
