"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Take the union of a collection of sets
 * @param sets a collection of sets to union
 * @returns union of a collection of sets
 */
function union(...sets) {
    switch (sets.length) {
        case 0:
            return new Set();
        case 1:
            return new Set(sets[0]);
        default:
            const union = new Set();
            for (const set of sets) {
                for (const item of set) {
                    union.add(item);
                }
            }
            return union;
    }
}
exports.union = union;
/**
 * Take the union of set a and b
 * @param a first set
 * @param b second set
 * @returns union of set a and b
 */
function unionPair(a, b) {
    const union = new Set();
    for (const item of a) {
        union.add(item);
    }
    for (const item of b) {
        union.add(item);
    }
    return union;
}
exports.unionPair = unionPair;
/**
 * Take the set intersection of set a and set b
 * @param a set a
 * @param b set b
 * @returns intersection of set a and b
 */
function intersection(...sets) {
    const intersection = new Set();
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
exports.intersection = intersection;
/**
 * Are sets a and b disjoint from each other
 * @param a set a
 * @param b set b
 * @return true if the sets are disjoint
 */
function disjoint(a, b) {
    for (const item of b) {
        if (a.has(item)) {
            return false;
        }
    }
    return true;
}
exports.disjoint = disjoint;
/**
 * Is set b a subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
function subset(a, b) {
    for (const item of b) {
        if (!a.has(item)) {
            return false;
        }
    }
    return true;
}
exports.subset = subset;
/**
 * Is set b a proper subset of set a
 * @param a set a
 * @param b set b
 * @return is b a subset of a
 */
function properSubset(a, b) {
    if (a.size <= b.size) {
        return false;
    }
    return subset(a, b);
}
exports.properSubset = properSubset;
/**
 * Take the set difference between set a and b
 * @param a a base set
 * @param b a set to remove
 * @returns the set difference `a - b`
 */
function difference(a, b) {
    const difference = new Set();
    for (const item of a) {
        if (!b.has(item)) {
            difference.add(item);
        }
    }
    return difference;
}
exports.difference = difference;
/**
 * Take the symmetric difference of a collection of sets
 * @param sets collection of sets to perform symmetric difference
 * @returns the symmetric difference between all sets
 */
function symmetricDifference(...sets) {
    const symmetricDiff = new Set();
    for (const set of sets) {
        for (const item of set) {
            if (symmetricDiff.has(item)) {
                symmetricDiff.delete(item);
            }
            else {
                symmetricDiff.add(item);
            }
        }
    }
    return symmetricDiff;
}
exports.symmetricDifference = symmetricDifference;
//# sourceMappingURL=index.js.map