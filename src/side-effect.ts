import { print } from "./env/print.ts";

let $ = () => print($);
/**
 * Prevent a value from being optimized out.
 */
export const createSideEffect = (v: any): void => {
  $ = v;
};
