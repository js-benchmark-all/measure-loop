import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const static_props = bench({
  warmupIters: 64,
  iters: 256,
});
{
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

    static_props.it('class with constructor', params, (headers) => {
      sideEffect(new Context(headers));
    });
  }

  {
    class Context {
      status!: number;
      headers!: string[];
    }

    static_props.it('class without constructor', params, (headers) => {
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

    static_props.it(
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

    static_props.it('Object.create()', params, (headers) => {
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

    static_props.it('function constructor', params, (headers) => {
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

    static_props.it(
      'function without constructor',
      params,
      (headers) => {
        // @ts-ignore
        let o = new Context();
        o.headers = headers;
        sideEffect(o);
      },
    );
  }
}

const dyn_props = bench({
  warmupIters: 64,
  iters: 128,
});
{
  const params = [(i: number) => 'k' + i] as const;
  dyn_props
    .it('Object.create(null)', params, (key) => {
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

    dyn_props.it('function constructor', params, (key) => {
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

    dyn_props.it(
      'function constructor (freezed proto)',
      params,
      (key) => {
        let o =
          // @ts-ignore
          new Context();
        o[key] = 0;
        sideEffect(o);
      },
    );
  }
}

const static_props_with_methods = bench({
  warmupIters: 64,
  iters: 128
});
{
  const common = {
    calc1(this: { a: number, b: number, c: number }) {
      return this.a + this.b + this.c;
    },

    calc2(this: { a: number, b: number, c: number }) {
      return this.a + this.b + this.c;
    },

    calc3(this: { a: number, b: number, c: number }) {
      return this.a + this.b + this.c;
    }
  };

  static_props_with_methods.it('object spread', [
    Math.random,
    Math.random,
    Math.random
  ], (a, b, c) => ({
    a, b, c, ...common
  }));

  {
    const proto = Object.assign(Object.create(null), common);
    proto.a = proto.b = proto.c = undefined;

    static_props_with_methods.it('Object.create()', [
      Math.random,
      Math.random,
      Math.random
    ], (a, b, c) => {
      let o = Object.create(proto);
      o.a = a;
      o.b = b;
      o.c = c;
      return o;
    });
  }
}

export default category()
  .it('static props', static_props)
  .it('dynamic props', dyn_props)
  .it('static props with methods', static_props_with_methods);
