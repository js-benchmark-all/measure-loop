Micro benchmarks for JS runtimes & engines.
```sh
# build
bun i

# build quickjs
cd quickjs
make
cd ..

# install JS engines
bun jsvu --engines=v8,javascriptcore,spidermonkey

# run a benchmark
bun run.ts [target] [file] [format]

# example: run object benchmarks in node
bun run.ts node object

# example: run object access benchmarks in bun, output to markdown
# available formats: md, json
bun run.ts bun object/access md
```

To install engines:
```sh
# install llrt (see release tags on https://github.com/awslabs/llrt)
bun engines/llrt/install.ts [release]

# install quickjs (see binaries on https://bellard.org/quickjs/binary_releases)
bun engines/quickjs/install.ts [os] [arch] [releaseDate]
```

Targets:
- Supported: `bun`, `deno`, `node`, `v8`, `jsc`, `spidermonkey`, `llrt`, `quickjs`.
- WIP support: `hermes`, `porffor`.
