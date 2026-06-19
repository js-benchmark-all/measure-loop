let $ = () => {
  throw $;
};
/**
 * Prevent a value from being optimized out.
 */
const sideEffect = (v: any): void => {
  $ = v;
};

export default sideEffect;
