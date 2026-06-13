export const FN_HRTIME = 'a';
export const HRTIME = 'a()';
export const HRTIME_RESET_START = 'b=a();';
export const HRTIME_RESET_END = 'c=a();';
export const HRTIME_MARK_START = 'let b=a();';
export const HRTIME_MARK_END = 'let c=a();';
export const HRTIME_DIFF = `c-b`;

export const FN = 'd';
export const PARAMS = 'e';
export const FN_PARAMS = 'f';

export const FN_GC = 'g';
export const RUN_GC = 'g();';

export const THRESHOLD = 'h';
export const MIN_ITERS = 'k';
export const ITERS = 'l';

export const RUNS = 'm';
export const GCS = 'n';

export const CURRENT_TIME = 't';

export const MAX_ITERS: number = 1 << 20;
