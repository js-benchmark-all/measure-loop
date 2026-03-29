import { print } from './detect/print.ts';

let $: any;
/**
 * Create a side effect for a variable.
 */
export const sideEffect = (v: any): void => {
  $ = v;
};
$ = () => print($);
