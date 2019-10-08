# ts-set-utils

This library provides a small set of utility functions to Typescript / Javascript `Set` class. The ES6 `Set` has a relatively small api surface and this library fill some comment needs. Python built in set object as used as a guide for some comment method that be used on sets

# Api

## Union

### Signature `A ∪ B`
``` Typescript
function union<T> (...sets: Set<T>[]): Set<T>;
```

Performs a union on all sets provided . A union merge two or more sets together. Read more on [wikipedia](https://en.wikipedia.org/wiki/Union_(set_theory))

![alt text](https://upload.wikimedia.org/wikipedia/commons/3/30/Venn0111.svg "Set Union")


### Example
``` Typescript
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 6])

console.log(union(set1, set2));
// Set<number>: Set([1, 2, 3, 6])
```

## Union Pair

### Signature `A ∪ B`
``` Typescript
function unionPair<T1, T2> (a: Set<T1>, b: Set<T2>): Set<T1 | T2>;
```

Performs a set union on two sets of different types. This is mostly a utility method of typescript users to mix the set element types

### Example
``` Typescript
interface Pet {
  pet: string
}
const set1 = new Set([1, 2, 3])
const set2 = new Set([{ pet: 'dog' }, { pet: 'cat' }])

console.log(union(set1, set2));
// Set<number | Pet>: Set([1, 2, 3 { pet: 'dog' }, { pet: 'cat' }])
```

## Intersection

### Signature `A ∩ B`
``` Typescript
function intersection<T> (...sets: Set<T>[]): Set<T>;
```

Performs a intersection on all sets provided. A union finds comment elements between two or more sets. Read more on [wikipedia](https://en.wikipedia.org/wiki/Intersection_(set_theory))

![alt text](https://upload.wikimedia.org/wikipedia/commons/9/99/Venn0001.svg "Set Intersection")

### Example
``` Typescript
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])

console.log(intersection(set1, set2));
// Set<number>: Set([2, 3])
```

## Disjoint

### Signature `A ∩ B = ∅`
``` Typescript
function disjoint<T> (a: Set<T>, b: Set<T>): boolean;
```

Determine if two sets are disjoint. Two sets are disjoint when they share no elements. Read more on [wikipedia](https://en.wikipedia.org/wiki/Disjoint_sets)

![alt text](https://upload.wikimedia.org/wikipedia/commons/d/df/Disjunkte_Mengen.svg "Disjoint Sets")

### Example
``` Typescript
const set1 = new Set([1, 2, 3])
const set2 = new Set([2, 3, 4])
const set3 = new Set([10])

console.log(disjoint(set1, set2));
// false

console.log(disjoint(set2, set3))
// true
```

## Difference

### Signature `A \ B`
``` Typescript
function difference<T> (a: Set<T>, b: Set<T>): Set<T>;
```

Calculate the set difference between set a and b. A set difference calculates a base set `A` with a set `B` removed. More formally this would be called the relative complement. Read more on [wikipedia](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)

![alt text](https://upload.wikimedia.org/wikipedia/commons/5/5a/Venn0010.svg "Relative Complement")

### Example

``` Typescript
const set1 = new Set([1, 2, 3])
const set2 = new Set([3, 4, 5])

console.log(difference(set1, set2));
// Set<number>: Set([1, 2])
```

## Symmetric Difference

### Signature `A ∆ B`
``` Typescript
function symmetricDifference<T>(...set<T>[]): Set<T>;
```

Calculate the symmetric difference between a collection of sets. A symmetric difference of two sets produces a set where elements are members of one set but not the other. The behavior is more complex for more sets. Read more on [wikipedia](https://en.wikipedia.org/wiki/Symmetric_difference)

![alt text](https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg "Symmetric Differnce")

### Example
``` Typescript
const set1 = new Set([1, 2, 3])
const set2 = new Set([3, 4, 5])

console.log(symmetricDifference(set1, set2));
// Set<number>: Set([1, 2, 4, 5])
```


