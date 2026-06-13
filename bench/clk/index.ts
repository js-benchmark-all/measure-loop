import { formatHz } from 'measure-loop/reporter/utils';

Bun.$.cwd(import.meta.dir);
await Promise.all([
  // Run clk calc
  Bun.$`node measure-loop.ts`,
  Bun.$`node mitata.ts`,
]);
{
  const cpuinfo = (await Bun.$`cat /proc/cpuinfo | grep MHz`.text()).split('\n').filter(Boolean);
  let hzSum = 0;
  for (let i = 0; i < cpuinfo.length; i++) {
    const hz = +cpuinfo[i].slice('cpu MHz		:'.length).trim() * 1e6;
    //console.log(`cpu ${i + 1}:`, formatHz(hz));
    hzSum += hz;
  }

  console.log('actual:', formatHz(hzSum / cpuinfo.length));
}

await Bun.$`bun fmt .`;
