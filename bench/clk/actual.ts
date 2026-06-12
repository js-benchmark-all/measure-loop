import { execSync } from 'node:child_process';

import { formatHz } from 'measure-loop/reporter/utils';

{
  const cpuinfo = execSync('cat /proc/cpuinfo | grep MHz').toString().split('\n').filter(Boolean);
  let hzSum = 0;
  for (let i = 0; i < cpuinfo.length; i++) {
    const hz = +cpuinfo[i].slice('cpu MHz		:'.length).trim() * 1e6;
    //console.log(`cpu ${i + 1}:`, formatHz(hz));
    hzSum += hz;
  }

  console.log('actual:', formatHz(hzSum / cpuinfo.length));
}
