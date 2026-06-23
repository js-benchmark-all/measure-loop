import type { MeasureOptions } from '../measure.ts';
import type { Runnable, RunOptions } from './types.ts';

export interface Category extends Runnable {}
export class Category {
  readonly childrenNames: string[];
  readonly children: Runnable[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.childrenNames = [];
    this.children = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it(name: string, bench: Runnable): this {
    this.childrenNames.push(name);
    this.children.push(bench);
    return this;
  }

  /**
   * @internal
   */
  async run<CategoryStore, Result>(
    options: RunOptions<CategoryStore, Result>,
    defaultBenchOptions?: MeasureOptions,
    id?: string,
    parentStore?: CategoryStore,
  ): Promise<any> {
    // Add new options if exists
    this.defaultBenchOptions != null &&
      (defaultBenchOptions =
        defaultBenchOptions != null
          ? {
              ...defaultBenchOptions,
              ...this.defaultBenchOptions,
            }
          : this.defaultBenchOptions);

    let store =
      id == null
        ? options.reporter.start()
        : options.reporter.categoryStart(id, parentStore!);
    store instanceof Promise && (store = await store);

    for (
      let i = 0, { children, childrenNames } = this;
      i < children.length;
      i++
    )
      await children[i].run(
        options,
        defaultBenchOptions,
        childrenNames[i],
        store,
      );

    return id == null
      ? options.reporter.end(store)
      : options.reporter.categoryEnd(store, id!, parentStore!);
  }
}

export default (defaultBenchOptions?: MeasureOptions): Category =>
  new Category(defaultBenchOptions);
