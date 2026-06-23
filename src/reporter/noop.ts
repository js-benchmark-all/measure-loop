import type { Reporter } from '../api/types.ts';

const reporter: Reporter<void, void, void> = {
  start: () => {},
  end: (_) => {},

  categoryStart: (_, _1) => {},
  categoryEnd: (_, _1, _2) => {},

  benchStart: (_, _1) => {},
  benchResult: (_, _1, _2) => {},
  benchError: (_, _1, _2) => {},
  benchEnd: (_, _1, _2) => {},
};

export default reporter;
