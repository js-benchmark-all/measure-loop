const sym: never[] = [];
/**
 * Prevent a value from being optimized out.
 */
export const createSideEffect = (v: any): void => {
  if (v === sym)
    throw v;
};

try {
  createSideEffect(sym);
} catch {}
