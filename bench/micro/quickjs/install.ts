import { unzipSync } from "fflate";
import { chmodSync, constants } from "node:fs";

if (process.argv.length < 5) {
  console.error('missing arguments.');
  process.exit(1);
}

const { 2: os, 3: arch, 4: releaseDate } = process.argv;

const link = `https://bellard.org/quickjs/binary_releases/quickjs-${os}-${arch}-${releaseDate}.zip`;
console.info(`fetching ${link}`);

const res = await fetch(link);
switch (res.status) {
  case 200: {
    const dest = `${import.meta.dir}/bin/${os}-${arch}-${releaseDate}`;
    console.info(`extracting to ${dest}`);

    await Bun.write(dest, unzipSync(await res.bytes())['qjs']);
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
