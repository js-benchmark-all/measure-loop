import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const staticProps = bench({
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

    staticProps.it('class with constructor', params, (headers) => {
      sideEffect(new Context(headers));
    });
  }

  {
    class Context {
      status!: number;
      headers!: string[];
    }

    staticProps.it('class without constructor', params, (headers) => {
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

    staticProps.it(
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

    staticProps.it('Object.create()', params, (headers) => {
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

    staticProps.it('function constructor', params, (headers) => {
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

    function Context(
      this: { status: number; headers: string[] },
      headers: string[],
    ) {
      this.headers = headers;
    }
    Context.prototype = proto;
    Object.freeze(Context.prototype);

    staticProps.it(
      'function constructor (freezed proto)',
      params,
      (headers) => {
        sideEffect(
          // @ts-ignore
          new Context(headers),
        );
      },
    );
  }

  {
    const proto = Object.create(null);
    proto.status = 200;
    proto.headers = undefined;

    function Context() {}
    Context.prototype = proto;

    staticProps.it(
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

  {
    const proto = Object.create(null);
    proto.status = 200;
    proto.headers = undefined;

    function Context() {}
    Context.prototype = proto;
    Object.freeze(Context.prototype);

    staticProps.it(
      'function without constructor (freezed proto)',
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

const dynProps = bench({
  warmupIters: 64,
  iters: 128,
});
{
  const params = [(i: number) => 'k' + i] as const;
  dynProps
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

    dynProps.it('function constructor', params, (key) => {
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

    dynProps.it(
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

export default category()
  .it('static props', staticProps)
  .it('dynamic props', dynProps);
