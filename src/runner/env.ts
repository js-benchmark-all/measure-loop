import { hrtimeDetected, hrtime } from '../env/hrtime.ts';
import { gcDetected, gc } from '../env/gc.ts';
import type { RuntimeEnv } from './category.ts';

gcDetected ||
  console.warn(
    'warn: no synchronous gc method detected, using a fallback implementation which can reduce accuracy.',
  );
hrtimeDetected ||
  console.warn(
    'warn: no high resolution time method detected, using a fallback implementation which can reduce accuracy.',
  );

export const env: RuntimeEnv = { gc, hrtime };
export default env;
