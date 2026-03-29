/**
 * Auto-detected method to print a value.
 */
export let print: (value: any) => void;
export let detected = true;

// @ts-ignore
if (globalThis.console?.log) print = globalThis.console.log;
// @ts-ignore
else if (globalThis.print && !globalThis.document) print = globalThis.print;
else {
  print = () => {
    throw new Error('no print function available!');
  };
  detected = false;
}
