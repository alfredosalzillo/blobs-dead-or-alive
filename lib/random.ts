/**
 * Generate a random number between `min` and `max`.
 */
export const random = (min: number, max: number, float = false) => {
  const val = Math.random() * (max - min) + min;
  if (float) {
    return val;
  }
  return Math.floor(val);
};

/**
 * Generate a random element of `list`.
 */
export const randomItem = <T, >(list: T[]) => list[random(0, list.length)]

export default random;
