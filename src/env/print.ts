let _print: (value: any) => void;
export let printDetected = true;

// @ts-ignore
if (globalThis.console?.log) _print = console.log;

// @ts-ignore
else if (globalThis.print && !globalThis.document) {
  _print = (x) => {
    // @ts-ignore
    print(x);
  };
} else
  try {
    // @ts-ignore
    _print = Porffor.log;
  } catch {
    _print = () => {
      throw new Error('no print function available!');
    };
    printDetected = false;
  }

export { _print as print };
