import { hrtimeDetected, hrtime } from '../env/hrtime.ts';
import { gcDetected, gc } from '../env/gc.ts';
import type { RuntimeEnv } from '../api/types.ts';
import { print } from '../env/print.ts';

gcDetected ||
  print(
    'warn: no synchronous gc method detected, using a fallback implementation which can reduce accuracy.',
  );
hrtimeDetected ||
  print(
    'warn: no high resolution time method detected, using a fallback implementation which can reduce accuracy.',
  );

/**
 * Auto-detected runtime methods required for measurement.
 */
export const env: RuntimeEnv = { gc, hrtime };
export default env;
