Micro benchmarks for JS runtimes & engines.
```sh
# build
bun i

# build quickjs
cd quickjs
make
cd ..

# install JS engines
bun i jsvu -g
export PATH=$HOME/.jsvu/bin:$PATH
jsvu --engines=v8,javascriptcore,spidermonkey

# run a benchmark
bun run.ts [target] [file] [format]

# example: run object benchmarks in node
bun run.ts node object

# example: run object access benchmarks in bun, output to markdown
# available formats: md, json
bun run.ts bun object/access md
```

To build these engines, clone their repo and run their build instructions:
- `llrt`: https://github.com/awslabs/llrt, fallback to `llrt`.
- `quickjs`: https://github.com/bellard/quickjs, fallback to `qjs`.

Targets:
- Supported: `bun`, `deno`, `node`, `v8`, `jsc`, `spidermonkey`, `llrt`, `quickjs`.
- WIP support: `hermes`, `porffor`.
