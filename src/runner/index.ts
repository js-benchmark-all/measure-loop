import { Category } from './runner.ts';
export const category = (id: string): Category => new Category(id);

export { default as env } from './env.ts';
export * as reporters from './reporters/index.ts';
