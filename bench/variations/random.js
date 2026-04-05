/**
 * @param {string | string[]} charset
 * @param {number} len
 */
export const randstring = (charset, len) => {
  let str = '';
  for (let i = 0; i < len; i++) str += charset[(Math.random() * len) | 0];
  return str;
};

export const DIGITS = '0123456789';
