export const FN_HRTIME = 'a';
export const HRTIME: string = FN_HRTIME + '()';

export const HRTIME_START = 'b';
export const HRTIME_END = 'c';

export const HRTIME_MARK_START: string = `let ${HRTIME_START}=${HRTIME};`;
export const HRTIME_MARK_END: string = `let ${HRTIME_END}=${HRTIME};`;
export const HRTIME_DIFF: string = `${HRTIME_END}-${HRTIME_START}`;

export const FN = 'd';
export const PARAMS = 'e';

export const FN_GC = 'f';
export const RUN_GC: string = FN_GC + '();';

export const HEAP_TMP = 'g';
export const FN_HEAP = 'h';
export const HEAP: string = FN_HEAP + '()';

export const THRESHOLD = 'k';
export const MIN_ITERS = 'l';

export const SAMPLES = 'm';
export const HEAPS = 'n';
export const GCS = 'o';
