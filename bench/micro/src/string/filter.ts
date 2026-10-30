import { bench, category, params } from 'measure-loop';

// FP helpers
const filter = (str: string, pred: (value: string) => boolean) =>
    [...str].filter(pred).join(''),
  buildFilter =
    (pred: (value: string) => boolean) => (str: string) => {
      let res = '',
        start = 0,
        i = 0;

      while (i < str.length) {
        if (pred(str[i])) {
          if (start !== i) res += str.slice(start, i);
          start = ++i;
        } else i++;
      }

      return res + str.slice(start, i);
    },
  isDigit = (c: string) => c >= '0' && c <= '9',
  isLower = (c: string) => c >= 'a' && c <= 'z',
  isUpper = (c: string) => c >= 'A' && c <= 'Z',
  isAlpha = (c: string) => isLower(c) || isUpper(c),
  isAlphaNumeric = (c: string) => isAlpha(c) || isDigit(c),
  isOneOf = (chars: string) => (c: string) => chars.includes(c);

const all = category();

{
  const b = bench();
  all.it('is alpha numeric', b);

  const ps = params.list(params.ref('abc123'));
  b.it('fp', ps, (str) => filter(str, isAlphaNumeric))
    .it('fp & procedural filter', ps, buildFilter(isAlphaNumeric))
    .it('regex', ps, (str) => str.replace(/[a-zA-Z0-9]/g, ''));
}

{
  const b = bench();
  all.it('is number or . or ,', b);

  const ps = params.list(params.ref('abc1,50 1000.00'));
  b.it('fp', ps, (str) =>
    filter(str, (c: string) => isDigit(c) || isOneOf('., ')(c)),
  )
    .it(
      'fp & procedural filter',
      ps,
      buildFilter((c: string) => isDigit(c) || isOneOf('., ')(c)),
    )
    .it('regex', ps, (str) => str.replace(/[0-9.,]/g, ''));
}

export default all;
