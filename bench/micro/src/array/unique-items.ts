import { bench, category } from 'measure-loop';

const uniqueArray = (items: number, uniqueItems: number) => {
  const uniqueArr = new Array<string>(uniqueItems);
  for (let i = 0; i < uniqueItems; i++)
    uniqueArr[i] = i + 'v' + i;

  const resArray = new Array<string>(items);
  for (let i = 0; i < items; i++)
    resArray[i] = uniqueArr[i % uniqueItems];
  return resArray;
}

const all = category();

for (const size of [16, 64, 128]) {
  const size_cat = category({
    iters: 2048 / size
  });
  all.it(`size ${size}`, size_cat);

  for (const uniqueItems of [size / 8, size / 4, size / 2, size]) {
    const unique_items = category();
    size_cat.it(`${uniqueItems} unique items`, unique_items);

    const UNIQUE_ARRAY = uniqueArray(size, uniqueItems);
    const params = [() => UNIQUE_ARRAY] as const;
    unique_items
      .it('to unique array',
        bench()
          .it('Array.includes()', params, (arr) => {
            if (arr.length === 0) return arr;

            let res: any[] = [arr[0]];
            for (let i = 1; i < arr.length; i++)
              res.includes(arr[i]) || res.push(arr[i]);
            return res;
          })
          .it('Set', params, (arr) => {
            let res = new Set();
            for (let i = 0; i < arr.length; i++)
              res.add(arr[i]);
            return res.values().toArray();
          })
          .it('Set direct assign', params, (arr) => new Set(arr).values().toArray())
      )
      .it('count unique items',
        bench()
          .it('Array.includes()', params, (arr) => {
            if (arr.length === 0) return arr;

            let res: any[] = [arr[0]];
            for (let i = 1; i < arr.length; i++)
              res.includes(arr[i]) || res.push(arr[i]);
            return res.length;
          })
          .it('Set', params, (arr) => {
            let res = new Set();
            for (let i = 0; i < arr.length; i++)
              res.add(arr[i]);
            return res.size;
          })
          .it('Set direct assign', params, (arr) => new Set(arr).size)
      );
  }
}

export default all;
