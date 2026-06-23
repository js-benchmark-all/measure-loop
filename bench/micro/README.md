Micro benchmarks for JS runtimes & engines.
```sh
# build
bun i

# build quickjs
cd quickjs
make
cd ..

# install other JS engines
bun i jsvu -g
export PATH=$HOME/.jsvu/bin:$PATH
jsvu --engines=v8,javascriptcore,spidermonkey

# run a benchmark
bun run.ts [target] [file] [format]

# example: run object benchmarks in node
bun run.ts node object

# example: run object access benchmarks in bun, output to markdown
bun run.ts bun object/access md
```
Supported targets: `bun`, `deno`, `node`, `v8`, `jsc`, `spidermonkey`, `quickjs`.

Support WIP: `hermes`, `porffor`.

Supported output format: `md`, `json`.
