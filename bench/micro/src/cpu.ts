import { bench } from 'measure-loop';

export default bench()
  .it('clk', [], () => { }, {
    gcOnce: true,
    inlineCalls: 1,
    iters: 1e4
  });
