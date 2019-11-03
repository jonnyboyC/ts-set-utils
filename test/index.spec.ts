import {
  union,
  unionPair,
  intersection,
  disjoint,
  difference,
  symmetricDifference,
  subset,
  properSubset,
  setEqual,
} from '../src/index';

type numberObject = {
  value: number;
};

describe('when performing a set union', () => {
  describe('when no sets are provided', () => {
    test('returns an empty set', () => {
      const result = union();
      expect(result).toEqual(new Set());
    });
  });

  describe('when one set is provided', () => {
    test('returns a shallow copy of the set', () => {
      const set = new Set<number>([1, 2, 3, 1]);
      const result = union(set);
      expect(result).toEqual(set);
      expect(result).not.toBe(set);
    });
  });

  describe('when multiple sets provided', () => {
    describe('when using primitives', () => {
      test('when sets disjoints joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([5, 6, 7]);

        const result = union(set1, set2);
        expect(result).toEqual(new Set([1, 2, 3, 5, 6, 7]));
      });

      test('when sets overlaps joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([3, 4, 5]);

        const result = union(set1, set2);
        expect(result).toEqual(new Set([1, 2, 3, 4, 5]));
      });
    });

    describe('when using objects', () => {
      describe('when reference equal', () => {
        test('when sets disjoints joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 5 },
            { value: 6 },
            { value: 7 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = union(set1, set2);
          expect(result).toEqual(new Set([...set1Values, ...set2Values]));
        });

        test('when sets overlaps joins them', () => {
          const set1Values: numberObject[] = [{ value: 1 }, { value: 2 }];

          const shared: numberObject = {
            value: 3,
          };

          const set2Values: numberObject[] = [{ value: 4 }, { value: 5 }];

          const set1 = new Set<numberObject>([...set1Values, shared]);
          const set2 = new Set<numberObject>([shared, ...set2Values]);

          const result = union(set1, set2);
          expect(result).toEqual(
            new Set([...set1Values, shared, ...set2Values]),
          );
        });
      });

      describe('when value equal', () => {
        test('when sets disjoints joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 5 },
            { value: 6 },
            { value: 7 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = union(set1, set2);
          expect(result).toEqual(new Set([...set1Values, ...set2Values]));
        });

        test('when sets overlaps joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 3 },
            { value: 4 },
            { value: 5 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = union(set1, set2);
          expect(result).toEqual(new Set([...set1Values, ...set2Values]));
        });
      });
    });
  });
});

describe('when performing a set union on a pair', () => {
  describe('when using primitives', () => {
    test('when sets disjoints joins them', () => {
      const set1 = new Set<number>([1, 2, 3]);
      const set2 = new Set<number>([5, 6, 7]);

      const result = unionPair(set1, set2);
      expect(result).toEqual(union(set1, set2));
    });

    test('when sets overlaps joins them', () => {
      const set1 = new Set<number>([1, 2, 3]);
      const set2 = new Set<number>([3, 4, 5]);

      const result = unionPair(set1, set2);
      expect(result).toEqual(union(set1, set2));
    });
  });

  describe('when using objects', () => {
    describe('when reference equal', () => {
      test('when sets disjoints joins them', () => {
        const set1Values: numberObject[] = [
          { value: 1 },
          { value: 2 },
          { value: 3 },
        ];

        const set2Values: numberObject[] = [
          { value: 5 },
          { value: 6 },
          { value: 7 },
        ];

        const set1 = new Set<numberObject>(set1Values);
        const set2 = new Set<numberObject>(set2Values);

        const result = unionPair(set1, set2);
        expect(result).toEqual(union(set1, set2));
      });

      test('when sets overlaps joins them', () => {
        const set1Values: numberObject[] = [{ value: 1 }, { value: 2 }];

        const shared: numberObject = {
          value: 3,
        };

        const set2Values: numberObject[] = [{ value: 4 }, { value: 5 }];

        const set1 = new Set<numberObject>([...set1Values, shared]);
        const set2 = new Set<numberObject>([shared, ...set2Values]);

        const result = unionPair(set1, set2);
        expect(result).toEqual(union(set1, set2));
      });
    });

    describe('when value equal', () => {
      test('when sets disjoints joins them', () => {
        const set1Values: numberObject[] = [
          { value: 1 },
          { value: 2 },
          { value: 3 },
        ];

        const set2Values: numberObject[] = [
          { value: 5 },
          { value: 6 },
          { value: 7 },
        ];

        const set1 = new Set<numberObject>(set1Values);
        const set2 = new Set<numberObject>(set2Values);

        const result = unionPair(set1, set2);
        expect(result).toEqual(union(set1, set2));
      });

      test('when sets overlaps joins them', () => {
        const set1Values: numberObject[] = [
          { value: 1 },
          { value: 2 },
          { value: 3 },
        ];

        const set2Values: numberObject[] = [
          { value: 3 },
          { value: 4 },
          { value: 5 },
        ];

        const set1 = new Set<numberObject>(set1Values);
        const set2 = new Set<numberObject>(set2Values);

        const result = unionPair(set1, set2);
        expect(result).toEqual(union(set1, set2));
      });
    });
  });
});

describe('when performing a set intersection', () => {
  describe('when no sets are provided', () => {
    test('returns an empty set', () => {
      const result = intersection();
      expect(result).toEqual(new Set());
    });
  });

  describe('when one set is provided', () => {
    test('returns a shallow copy of the set', () => {
      const set = new Set<number>([1, 2, 3, 1]);
      const result = intersection(set);
      expect(result).toEqual(set);
    });
  });

  describe('when two sets provided', () => {
    describe('when using primitives', () => {
      test('when sets disjoints joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([5, 6, 7]);

        const result = intersection(set1, set2);
        expect(result).toEqual(new Set());
      });

      test('when sets overlaps joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([3, 4, 5]);

        const result = intersection(set1, set2);
        expect(result).toEqual(new Set([3]));
      });
    });

    describe('when using objects', () => {
      describe('when reference equal', () => {
        test('when sets disjoints joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 5 },
            { value: 6 },
            { value: 7 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = intersection(set1, set2);
          expect(result).toEqual(new Set());
        });

        test('when sets overlaps joins them', () => {
          const set1Values: numberObject[] = [{ value: 1 }, { value: 2 }];

          const shared: numberObject = {
            value: 3,
          };

          const set2Values: numberObject[] = [{ value: 4 }, { value: 5 }];

          const set1 = new Set<numberObject>([...set1Values, shared]);
          const set2 = new Set<numberObject>([shared, ...set2Values]);

          const result = intersection(set1, set2);
          expect(result).toEqual(new Set([shared]));
        });
      });

      describe('when value equal', () => {
        test('when sets disjoints joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 5 },
            { value: 6 },
            { value: 7 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = intersection(set1, set2);
          expect(result).toEqual(new Set());
        });

        test('when sets overlaps joins them', () => {
          const set1Values: numberObject[] = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
          ];

          const set2Values: numberObject[] = [
            { value: 3 },
            { value: 4 },
            { value: 5 },
          ];

          const set1 = new Set<numberObject>(set1Values);
          const set2 = new Set<numberObject>(set2Values);

          const result = intersection(set1, set2);
          expect(result).toEqual(new Set());
        });
      });
    });
  });

  describe('when three sets provided', () => {
    describe('when using primitives', () => {
      test('when sets disjoints joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([5, 6, 7]);
        const set3 = new Set<number>([2, 6]);

        const result = intersection(set1, set2, set3);
        expect(result).toEqual(new Set());
      });

      test('when sets overlaps joins them', () => {
        const set1 = new Set<number>([1, 2, 3]);
        const set2 = new Set<number>([3, 4, 5]);
        const set3 = new Set<number>([10, 3, 4]);

        const result = intersection(set1, set2, set3);
        expect(result).toEqual(new Set([3]));
      });
    });

    describe('when using objects', () => {
      test('when sets disjoints joins them', () => {
        const set1Values: numberObject[] = [
          { value: 1 },
          { value: 2 },
          { value: 3 },
        ];

        const set2Values: numberObject[] = [
          { value: 5 },
          { value: 6 },
          { value: 7 },
        ];

        const set3Values: numberObject[] = [{ value: 10 }];

        const set1 = new Set<numberObject>(set1Values);
        const set2 = new Set<numberObject>(set2Values);
        const set3 = new Set<numberObject>(set3Values);

        const result = intersection(set1, set2, set3);
        expect(result).toEqual(new Set());
      });

      test('when sets overlaps joins them', () => {
        const set1Values: numberObject[] = [{ value: 1 }, { value: 2 }];
        const set2Values: numberObject[] = [{ value: 4 }, { value: 5 }];
        const set3Values: numberObject[] = [{ value: 8 }];

        const shared: numberObject = {
          value: 3,
        };

        const set1 = new Set<numberObject>([...set1Values, shared]);
        const set2 = new Set<numberObject>([shared, ...set2Values]);
        const set3 = new Set<numberObject>([shared, ...set3Values]);

        const result = intersection(set1, set2, set3);
        expect(result).toEqual(new Set([shared]));
      });
    });
  });
});

describe('when checking if two sets are disjoint', () => {
  describe('when the set is empty', () => {
    test('it returns true', () => {
      const iterable = new Set([1, 2, 3]);
      expect(disjoint(new Set(), iterable)).toBe(true);
    });
  });

  describe('when the set is non empty', () => {
    describe('when the iterable is empty', () => {
      test('it returns false', () => {
        const iterable = new Set();
        expect(disjoint(new Set([1, 10, 5]), iterable)).toBe(true);
      });
    });

    describe('when the iterable has one overlapping element', () => {
      test('it returns false', () => {
        const iterable = new Set([1, 2, 3]);
        expect(disjoint(new Set([1, 10, 5]), iterable)).toBe(false);
      });
    });

    describe('when the iterable has multiple overlapping elements', () => {
      test('it returns false', () => {
        const iterable = new Set([1, 2, 3]);
        expect(disjoint(new Set([1, 10, 5, 3]), iterable)).toBe(false);
      });
    });
  });
});

describe('when checking a set is a subset of another', () => {
  describe('when sets are disjoint', () => {
    test('returns false', () => {
      const set = new Set([1, 2, 3]);
      expect(subset(new Set([4, 5]), set)).toBe(false);
    });
  });

  describe('when both sets are empty', () => {
    test('returns true', () => {
      expect(subset(new Set(), new Set())).toBe(true);
    });
  });

  describe('when b is a strict subset', () => {
    test('returns true', () => {
      expect(subset(new Set([1, 2, 3]), new Set([1, 2]))).toBe(true);
    });
  });

  describe('when b is a equal', () => {
    test('returns true', () => {
      expect(subset(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    });
  });

  describe('when b partial overlap', () => {
    test('returns false', () => {
      expect(subset(new Set([1, 2, 3]), new Set([2, 3, 4]))).toBe(false);
    });
  });
});

describe('when checking a set equal of another', () => {
  describe('when sets are disjoint', () => {
    test('returns false', () => {
      const set = new Set([1, 2, 3]);
      expect(setEqual(new Set([4, 5]), set)).toBe(false);
    });
  });

  describe('when both sets are empty', () => {
    test('returns true', () => {
      expect(setEqual(new Set(), new Set())).toBe(true);
    });
  });

  describe('when b is a strict subset', () => {
    test('returns false', () => {
      expect(setEqual(new Set([1, 2, 3]), new Set([1, 2]))).toBe(false);
    });
  });

  describe('when b is a equal', () => {
    test('returns true', () => {
      expect(setEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
    });
  });

  describe('when b partial overlap', () => {
    test('returns false', () => {
      expect(subset(new Set([1, 2, 3]), new Set([2, 3, 4]))).toBe(false);
    });
  });
});

describe('when checking a set is a proper subset of another', () => {
  describe('when sets are disjoint', () => {
    test('returns false', () => {
      const set = new Set([1, 2, 3]);
      expect(properSubset(new Set([4, 5]), set)).toBe(false);
    });
  });

  describe('when both sets are empty', () => {
    test('returns false', () => {
      expect(properSubset(new Set(), new Set())).toBe(false);
    });
  });

  describe('when b is a strict subset', () => {
    test('returns true', () => {
      expect(properSubset(new Set([1, 2, 3]), new Set([1, 2]))).toBe(true);
    });
  });

  describe('when b is a equal', () => {
    test('returns false', () => {
      expect(properSubset(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(false);
    });
  });

  describe('when b partial overlap', () => {
    test('returns false', () => {
      expect(properSubset(new Set([1, 2, 3]), new Set([2, 3, 4]))).toBe(false);
    });
  });
});

describe('when performing a set difference', () => {
  describe('when set to remove is empty', () => {
    test('it does not alter the set', () => {
      const base = new Set([1, 2, 3]);
      expect(difference(base, new Set())).toEqual(base);
    });
  });

  describe('when set to remove is non empty', () => {
    describe('when the removal set does not overlap', () => {
      test('it does not alter the set', () => {
        const base = new Set([1, 2, 3]);
        const remove = new Set([4, 5, 6]);
        expect(difference(base, remove)).toEqual(base);
      });
    });

    describe('when the removal set does overlap', () => {
      test('it does alter the set', () => {
        const base = new Set([1, 2, 3]);
        const remove = new Set([3, 4, 5]);
        expect(difference(base, remove)).toEqual(new Set([1, 2]));
      });
    });
  });
});

describe('when performing a symmetric set difference', () => {
  describe('when no sets are provided', () => {
    test('it returns an empty set', () => {
      expect(symmetricDifference()).toEqual(new Set());
    });
  });

  describe('when one set is provided', () => {
    test('it returns a shallow copy', () => {
      const set = new Set([1, 2, 3]);
      const result = symmetricDifference(set);

      expect(result).toEqual(set);
      expect(result).not.toBe(set);
    });
  });

  describe('when two sets is provided', () => {
    describe('when sets do not overlap', () => {
      test('performs a union', () => {
        const set1 = new Set([1, 2, 3]);
        const set2 = new Set([4, 5, 6]);
        const result = symmetricDifference(set1, set2);

        expect(result).toEqual(union(set1, set2));
      });
    });

    describe('when sets do overlap', () => {
      test('performs an intersection complement', () => {
        const set1 = new Set([1, 2, 3]);
        const set2 = new Set([3, 4, 5]);
        const result = symmetricDifference(set1, set2);

        expect(result).toEqual(new Set([1, 2, 4, 5]));
      });
    });
  });

  describe('when three sets is provided', () => {
    describe('when all overlap', () => {
      test('correctly includes the triple overlap', () => {
        const set1 = new Set([1, 2, 3, 10]);
        const set2 = new Set([2, 3, 4, 11]);
        const set3 = new Set([3, 4, 1, 12]);
        const result = symmetricDifference(set1, set2, set3);

        expect(result).toEqual(new Set([3, 10, 11, 12]));
      });
    });
  });
});
