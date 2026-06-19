import type { MeasureOptions } from '../measure.ts';
import type { Bench, RunOptions } from './bench.ts';

export class Category {
  readonly childrenNames: string[];
  readonly children: (Category | Bench)[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.childrenNames = [];
    this.children = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it(name: string, bench: Category | Bench): this {
    this.childrenNames.push(name);
    this.children.push(bench);
    return this;
  }

  async run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, CategoryReturn>,
    defaultBenchOptions?: MeasureOptions,
    id?: string,
    parentStore?: CategoryStore,
  ): Promise<CategoryReturn> {
    // Add new options if exists
    this.defaultBenchOptions != null &&
      (defaultBenchOptions =
        defaultBenchOptions != null
          ? {
              ...defaultBenchOptions,
              ...this.defaultBenchOptions,
            }
          : this.defaultBenchOptions);

    let store = options.reporter.categoryStart(
      // @ts-ignore
      id,
      parentStore,
    );
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

    return options.reporter.categoryEnd(store, id!, parentStore!);
  }
}

export default (defaultBenchOptions?: MeasureOptions): Category =>
  new Category(defaultBenchOptions);
