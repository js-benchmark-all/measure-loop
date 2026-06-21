Micro benchmarks for all runtimes & engines.
```sh
# build package
cd ../..
bun i
bun task build
cd bench/micro

# run a benchmark
bun run.ts target file

# example: run object benchmarks in node
bun run.ts node object

# example: run object access benchmarks in bun
bun run.ts bun object/access
```

To setup JS engines, add `jsvu` binary directory to `PATH`:
```sh
# Add jsvu to PATH
export PATH=$HOME/.jsvu/bin:$PATH

# Install engines
bun i jsvu -g
jsvu

# Install porffor
bun i -g porffor
```
