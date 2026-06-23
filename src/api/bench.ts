import { IS_BUILD } from 'runtime-compiler/env';
import {
  compileLoop,
  measure,
  type MeasureOptions,
} from '../measure.ts';
import type { RunOptions, Runnable } from './types.ts';

export interface Bench extends Runnable {}
export class Bench {
  readonly benchIds: string[];
  readonly benchParams: any[];
  readonly benchFns: any[];
  readonly benchOptionList: any[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.benchIds = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptionList = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it<const Params extends readonly ((idx: number) => any)[]>(
    id: string,
    params: Params,
    fn: (
      ...args: {
        [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
      }
    ) => any,
    options?: MeasureOptions,
  ): this {
    this.benchIds.push(id);
    this.benchParams.push(params);
    this.benchFns.push(fn);
    this.benchOptionList.push(options);
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

    const {
      reporter,
      env: { gc, hrtime },
    } = options;

    // Run directly instead of wrapping in a category
    const isRoot = parentStore == null;
    if (isRoot) {
      const res = reporter.start();

      parentStore = res instanceof Promise ? await res : res;
      id = 'benchmarks';
    }

    // Run bench
    {
      let store = reporter.benchStart(id!, parentStore!);
      store instanceof Promise && (store = await store);

      const benchCnt = this.benchIds.length;

      if (IS_BUILD) {
        // Run cases
        for (
          let i = 0,
            { benchParams, benchFns, benchOptionList } = this;
          i < benchCnt;
          i++
        ) {
          await compileLoop(
            benchParams[i],
            benchFns[i],
            defaultBenchOptions != null
              ? {
                  ...defaultBenchOptions,
                  ...benchOptionList[i],
                }
              : benchOptionList[i],
          );
        }
      } else {
        // Shuffle list
        const doShuffle = options.shuffle !== false;
        let shuffleMap: number[];
        if (doShuffle) {
          shuffleMap = new Array(benchCnt);
          for (let i = 0; i < benchCnt; i++) shuffleMap[i] = i;
          for (let i = benchCnt; i > 0; ) {
            const swapIdx = (Math.random() * i) >>> 0;
            i--;

            const v = shuffleMap[i];
            shuffleMap[i] = shuffleMap[swapIdx];
            shuffleMap[swapIdx] = v;
          }
        }

        // Run cases
        for (
          let i = 0,
            { benchIds, benchParams, benchFns, benchOptionList } =
              this;
          i < benchCnt;
          i++
        ) {
          const shuffledIdx = doShuffle ? shuffleMap![i] : i;

          try {
            const res = reporter.benchResult(
              store,
              benchIds[shuffledIdx],
              await measure(
                benchParams[shuffledIdx],
                benchFns[shuffledIdx],
                gc,
                hrtime,
                defaultBenchOptions != null
                  ? {
                      ...defaultBenchOptions,
                      ...benchOptionList[shuffledIdx],
                    }
                  : benchOptionList[shuffledIdx],
              ),
            );
            res instanceof Promise && (await res);
          } catch (e) {
            const res = reporter.benchError(
              store,
              benchIds[shuffledIdx],
              e,
            );
            res instanceof Promise && (await res);
          }
        }
      }

      const res = reporter.benchEnd(store, id!, parentStore!);
      res instanceof Promise && (await res);
    }

    // Return to match the behavior of category.run
    if (isRoot) return reporter.end(parentStore!);
  }
}

export default (defaultBenchOptions?: MeasureOptions): Bench =>
  new Bench(defaultBenchOptions);
