import { expect, test} from 'vitest';

import { cumulativeSum } from './cumulative-sum';
import { binarySearch } from './binary-search';
import { LeastRecentlyUsed } from './least-recently-used';

// Tests for cumulativeSum
test('cumulative sum of an array', () => {
      expect(cumulativeSum([1, 3, 5, 7])).toBe(16);
      expect(cumulativeSum([-2, -4, -8])).toBe(-14);
});

// Test for binarySearch
test('binary search for target item in array', () => {
      expect(binarySearch(['a', 'c', 'd', 'f', 'g'], 'd')).toBe(2)
      expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3)
})

// Test for LeastRecentlyUsed 
test('LeastRecentlyUsed item in cache', () => {
      const cache = new LeastRecentlyUsed(5);
      cache.putItem('a', 1);
      cache.putItem(2, 'b');
      cache.putItem(1, 'a');
      expect(cache.getItem(1)).toBe('a')
})

