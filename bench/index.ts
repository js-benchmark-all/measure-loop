import { summary, run, bench } from 'mitata';

// Example benchmark
summary(() => {
  bench('Date.now()', () => Date.now());
  bench('performance.now()', performance.now.bind(performance));
});

// Start the benchmark
run();
