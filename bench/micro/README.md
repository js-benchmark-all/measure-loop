Micro benchmarks for JS runtimes & engines.
```sh
# build
bun i

# run a benchmark
bun run.ts target file

# example: run object benchmarks in node
bun run.ts node object

# example: run object access benchmarks in bun
bun run.ts bun object/access
```

To setup JS engines, add `jsvu` binary directory to `PATH`:
```sh
# add jsvu to PATH
export PATH=$HOME/.jsvu/bin:$PATH

# install porffor
bun i -g porffor

# build quickjs
cd quickjs
make
cd ..

# install other JS engines
bun i jsvu -g
jsvu
```
