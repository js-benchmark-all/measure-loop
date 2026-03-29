import { print } from './detect/print.ts';

let $: any;
export const sideEffect = (v: any): void => {
  $ = v;
};
$ = () => print($);
// @ts-ignore
globalThis.__measure_loop_side_effect_store__ = () => $;
// @ts-ignore
sideEffect(globalThis.__measure_loop_side_effect_store__());
