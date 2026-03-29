import { join, resolve } from 'node:path';

export const SCRIPTS = resolve(import.meta.dirname, '..');
export const ROOT = resolve(SCRIPTS, '..');
export const SOURCE = join(ROOT, 'src');
export const NODE_MODULES = join(ROOT, 'node_modules');
export const LIB = join(NODE_MODULES, '$');
export const BENCH = join(ROOT, 'bench');
export const TESTS = join(ROOT, 'tests');
export const SNAP = join(ROOT, 'snap');
