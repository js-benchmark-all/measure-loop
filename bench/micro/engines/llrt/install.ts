import { chmodSync, constants } from "node:fs";

const { 2: release } = process.argv;
if (release == null) {
  console.error('missing arguments.');
  process.exit(1);
}

const link = `https://github.com/awslabs/llrt/releases/download/${release}/llrt-container-${process.arch}`;
console.info(`fetching ${link}`);

const res = await fetch(link);
switch (res.status) {
  case 200: {
    const blob = await res.blob();

    let size = blob.size, unit = 'b';
    if (size >= 1e3) {
      size /= 1e3;
      unit = 'kb';

      if (size >= 1e3) {
        size /= 1e3;
        unit = 'mb';
      }
    }
    size = Math.round(size * 100) / 100;

    const dest = `${import.meta.dir}/bin/${release}/${process.arch}`;
    console.info(`saving to ${dest} (${size + unit})`);

    await Bun.write(dest, blob);
    chmodSync(dest, constants.S_IRWXU);

    console.info('install succeeded!');
    break;
  }

  case 404: {
    console.error(`container binary for ${process.arch} does not exist!`);
    break;
  }

  default: {
    console.error(res);
    break;
  }
}
