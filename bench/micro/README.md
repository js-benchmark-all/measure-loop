Micro benchmarks for all runtimes & engines.
```sh
# Install all dependencies
bun run.ts <target> <file>
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
