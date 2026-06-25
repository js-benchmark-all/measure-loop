import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const all = category();

{
  const b = bench({
    warmupIters: 16,
    iters: 32,
  });
  all.it('from promises', b);

  const params = [
    (i: number) => {
      const arr = new Array(8);
      for (let j = 0; j < 8; j++)
        arr[j] = Promise.resolve(i * j + i - j);
      return arr;
    },
  ] as const;

  const consumeIter = async (g: AsyncGenerator<any, any, any>) => {
    let sum = 0;
    for await (const x of g) sum += x;
    sideEffect(sum);
  };

  async function* createAsyncGen(list: Promise<any>[]) {
    yield* list;
  }

  const DONE = Promise.resolve({ done: true, value: undefined });
  const nilPromise = Promise.resolve();
  const resolve = (value: any) => ({ done: false, value });

  class AsyncIter implements AsyncGenerator<any, any, any> {
    i: number;
    readonly l: Promise<any>[];

    constructor(list: Promise<any>[]) {
      this.i = 0;
      this.l = list;
    }

    next(): Promise<IteratorResult<any, any>> {
      return this.i < this.l.length
        ? this.l[this.i++].then(resolve)
        : DONE;
    }

    async return(value: any): Promise<IteratorResult<any, any>> {
      this.i = this.l.length;
      return { done: true, value: await value };
    }

    throw(): Promise<IteratorResult<any, any>> {
      this.i = this.l.length;
      return DONE;
    }

    [Symbol.asyncIterator]() {
      return this;
    }

    [Symbol.asyncDispose]() {
      this.i = this.l.length;
      return nilPromise;
    }
  }

  const createAsyncIter = (list: Promise<any>[]) =>
    new AsyncIter(list);

  b.it('generator', params, (arr) =>
    consumeIter(createAsyncGen(arr)),
  );
  b.it('iterator', params, (arr) =>
    consumeIter(createAsyncIter(arr)),
  );
}

export default all;
