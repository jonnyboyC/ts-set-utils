/**
 * Take the union of a collection of sets
 * @param sets a collection of sets to union
 * @returns union of a collection of sets
 */
export function union<T>(...sets: Set<T>[]): Set<T> {
  switch (sets.length) {
    case 0:
      return new Set();
    case 1:
      return new Set(sets[0]);
    default:
      const union = new Set<T>();
      for (const set of sets) {
        for (const item of set) {
          union.add(item);
        }
      }

      return union;
  }
}

/**
 * Take the union of set a and b
 * @param a first set
 * @param b second set
 * @returns union of set a and b
 */
export function unionPair<T1, T2>(a: Set<T1>, b: Set<T2>): Set<T1 | T2> {
  const union = new Set<T1 | T2>();

  for (const item of a) {
    union.add(item);
  }

  for (const item of b) {
    union.add(item);
  }

  return union;
}

/**
 * Take the set intersection of set a and set b
 * @param a set a
 * @param b set b
 * @returns intersection of set a and b
 */
export function intersection<T>(...sets: Set<T>[]): Set<T> {
  const intersection = new Set<T>();
  const [first, ...rest] = sets;

  switch (sets.length) {
    case 0:
      return intersection;
    case 1:
      return new Set(first);
    case 2:
      for (const item of first) {
        if (rest[0].has(item)) {
          intersection.add(item);
        }
      }
      return intersection;
    default:
      for (const item of first) {
        if (rest.every(set => set.has(item))) {
          intersection.add(item);
        }
      }

      return intersection;
  }
}

/**
 * Are sets a and b disjoint from each other
 * @param a set a
 * @param b set b
 * @return true if the sets are disjoint
 */
export function disjoint<T>(a: Set<T>, b: Set<T>): boolean {
  for (const item of b) {
    if (a.has(item)) {
      return false;
    }
  }

  return true;
}

/**
 * Is set b a subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
export function subset<T>(a: Set<T>, b: Set<T>): boolean {
  for (const item of b) {
    if (!a.has(item)) {
      return false;
    }
  }

  return true;
}

/**
 * Does set a and b contain the same elements
 * @param a set a
 * @param b set b
 * @returns is a value equal to b
 */
export function setEqual<T>(a: Set<T>, b: Set<T>): boolean {
  if (a.size != b.size) {
    return false;
  }

  return subset(a, b);
}

/**
 * Is set b a proper subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
export function properSubset<T>(a: Set<T>, b: Set<T>): boolean {
  if (a.size <= b.size) {
    return false;
  }

  return subset(a, b);
}

/**
 * Take the set difference between set a and b
 * @param a a base set
 * @param b a set to remove
 * @returns the set difference `a - b`
 */
export function difference<T>(a: Set<T>, b: Set<T>): Set<T> {
  const difference = new Set<T>();

  for (const item of a) {
    if (!b.has(item)) {
      difference.add(item);
    }
  }

  return difference;
}

/**
 * Take the symmetric difference of a collection of sets
 * @param sets collection of sets to perform symmetric difference
 * @returns the symmetric difference between all sets
 */
export function symmetricDifference<T>(...sets: Set<T>[]): Set<T> {
  const symmetricDiff = new Set<T>();

  for (const set of sets) {
    for (const item of set) {
      if (symmetricDiff.has(item)) {
        symmetricDiff.delete(item);
      } else {
        symmetricDiff.add(item);
      }
    }
  }

  return symmetricDiff;
}
