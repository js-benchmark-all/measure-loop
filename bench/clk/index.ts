Bun.$.cwd(import.meta.dir);
await Promise.all([
  // Run clk calc
  Bun.$`node measure-loop.ts`,
  Bun.$`node mitata.ts`,
  Bun.$`node actual.ts`,
]);
await Bun.$`bun fmt .`;
