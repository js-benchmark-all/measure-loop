import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const all = category();

{
  const b = bench({
    warmupIters: 64,
    iters: 256,
  });
  all.it('static props', b);

  const params = [() => [] as string[]] as const;
  {
    class Context {
      status: number;
      headers: string[];

      constructor(headers: string[]) {
        this.status = 200;
        this.headers = headers;
      }
    }

    b.it('class with constructor', params, (headers) => {
      sideEffect(new Context(headers));
    });
  }

  {
    class Context {
      status!: number;
      headers!: string[];
    }

    b.it('class without constructor', params, (headers) => {
      let o = new Context();
      o.status = 200;
      o.headers = headers;
      sideEffect(o);
    });
  }

  {
    class Context {
      status = 200;
      headers!: string[];
    }

    b.it(
      'class with default initializer, without constructor',
      params,
      (headers) => {
        let o = new Context();
        o.headers = headers;
        sideEffect(o);
      },
    );
  }

  {
    const proto = Object.create(null);
    proto.status = 200;
    proto.headers = undefined;

    b.it('Object.create()', params, (headers) => {
      let o = Object.create(proto);
      o.headers = headers;
      sideEffect(o);
    });
  }

  {
    const proto = Object.create(null);
    proto.status = 200;
    proto.headers = undefined;

    function Context(
      this: { status: number; headers: string[] },
      headers: string[],
    ) {
      this.headers = headers;
    }
    Context.prototype = proto;

    b.it('function constructor', params, (headers) => {
      sideEffect(
        // @ts-ignore
        new Context(headers),
      );
    });
  }

  {
    const proto = Object.create(null);
    proto.status = 200;
    proto.headers = undefined;

    function Context() {}
    Context.prototype = proto;

    b.it('function without constructor', params, (headers) => {
      // @ts-ignore
      let o = new Context();
      o.headers = headers;
      sideEffect(o);
    });
  }
}

{
  const b = bench({
    warmupIters: 64,
    iters: 128,
  });
  all.it('dynamic props', b);

  const params = [(i: number) => 'k' + i] as const;
  b.it('Object.create(null)', params, (key) => {
    let o = Object.create(null);
    o[key] = 0;
    sideEffect(o);
  })
    .it('object literal', params, (key) => {
      let o = {};
      // @ts-ignore
      o[key] = 0;
      sideEffect(o);
    })
    .it('object literal (computed properties)', params, (key) => {
      sideEffect({ [key]: 0 });
    });

  {
    function Context() {}
    Context.prototype = Object.create(null);

    b.it('function constructor', params, (key) => {
      let o =
        // @ts-ignore
        new Context();
      o[key] = 0;
      sideEffect(o);
    });
  }

  {
    function Context() {}
    Context.prototype = Object.create(null);
    Object.freeze(Context.prototype);

    b.it('function constructor (freezed proto)', params, (key) => {
      let o =
        // @ts-ignore
        new Context();
      o[key] = 0;
      sideEffect(o);
    });
  }

  {
    const map = new WeakMap();
    b.it('WeakMap store', params, (key) => {
      let o = {};
      map.set(o, key);
      sideEffect(o);
    });
  }
}

{
  const b = bench({
    warmupIters: 64,
    iters: 128,
  });
  all.it('static props with methods', b);

  const proto = Object.freeze({
    calc1(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    },

    calc2(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    },

    calc3(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    },
  });

  function Instance() {}
  Instance.prototype = proto;

  // @ts-ignore
  class FullInstance {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    calc1(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    }

    calc2(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    }

    calc3(this: { a: number; b: number; c: number }) {
      return this.a + this.b + this.c;
    }
  }

  const params = [Math.random, Math.random, Math.random] as const;
  b.it('object spread', params, (a, b, c) => ({
    a,
    b,
    c,
    ...proto,
  }))
    .it('Object.create()', params, (a, b, c) => {
      let o = Object.create(proto);
      o.a = a;
      o.b = b;
      o.c = c;
      return o;
    })
    .it('function constructor', params, (a, b, c) => {
      // @ts-ignore
      let o = new Instance();
      o.a = a;
      o.b = b;
      o.c = c;
      return o;
    })
    .it('constructor', params, (a, b, c) => new FullInstance(a, b, c))
    .it('Object.setPrototypeOf()', params, (a, b, c) =>
      Object.setPrototypeOf({ a, b, c }, proto),
    )
    .it('set __proto__', params, (a, b, c) => ({
      __proto__: proto,
      a,
      b,
      c,
    }));
}

export default all;
