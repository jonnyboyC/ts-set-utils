/**
 * Take the union of a collection of sets
 * @param sets a collection of sets to union
 * @returns union of a collection of sets
 */
export declare function union<T>(...sets: Set<T>[]): Set<T>;
/**
 * Take the union of set a and b
 * @param a first set
 * @param b second set
 * @returns union of set a and b
 */
export declare function unionPair<T1, T2>(a: Set<T1>, b: Set<T2>): Set<T1 | T2>;
/**
 * Take the set intersection of set a and set b
 * @param a set a
 * @param b set b
 * @returns intersection of set a and b
 */
export declare function intersection<T>(...sets: Set<T>[]): Set<T>;
/**
 * Are sets a and b disjoint from each other
 * @param a set a
 * @param b set b
 * @return true if the sets are disjoint
 */
export declare function disjoint<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Is set b a subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
export declare function subset<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Does set a and b contain the same elements
 * @param a set a
 * @param b set b
 * @returns is a value equal to b
 */
export declare function setEqual<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Is set b a proper subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
export declare function properSubset<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Take the set difference between set a and b
 * @param a a base set
 * @param b a set to remove
 * @returns the set difference `a - b`
 */
export declare function difference<T>(a: Set<T>, b: Set<T>): Set<T>;
/**
 * Take the symmetric difference of a collection of sets
 * @param sets collection of sets to perform symmetric difference
 * @returns the symmetric difference between all sets
 */
export declare function symmetricDifference<T>(...sets: Set<T>[]): Set<T>;
