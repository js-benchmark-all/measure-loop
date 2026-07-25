import { bench, category } from 'measure-loop';

const all = category();
if ('Response' in globalThis) {
  if ('Headers' in globalThis) {
    const b = bench();
    all.it('with headers', b);

    const params = [() => ('' + Math.random()).padEnd(20)] as const;
    b.it('new Headers().append()', params, (str) => {
      let h = new Headers();
      h.append('X-ID', str);
      return new Response(null, { headers: h });
    })
      .it('new Headers().set()', params, (str) => {
        let h = new Headers();
        h.set('X-ID', str);
        return new Response(null, { headers: h });
      })
      .it(
        'new Headers(record)',
        params,
        (str) =>
          new Response(null, {
            headers: new Headers({ 'X-ID': str }),
          }),
      )
      .it(
        'headers record',
        params,
        (str) => new Response(null, { headers: { 'X-ID': str } }),
      )
      .it(
        'new Headers(pairs)',
        params,
        (str) =>
          new Response(null, {
            headers: new Headers([['X-ID', str]]),
          }),
      )
      .it(
        'header pairs',
        params,
        (str) => new Response(null, { headers: [['X-ID', str]] }),
      );
  }
}

export default all;
