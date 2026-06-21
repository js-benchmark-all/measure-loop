import { bench } from 'measure-loop';

// `1e3 / clk.mean` approximately equals the cpu clock frequency
export default bench().it('clk', [], () => {}, {
  gcOnce: true,
  inlineCalls: 1,
  iters: 1e4,
});
