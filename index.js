// This document contains two different solutions to:
// https://leetcode.com/problems/memoize

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const results = fn.apply(this, args);
        cache[key] = results;
        return results;
    }
}

/**
 * @param {Function} fn
 */
function lowMemMemoize(fn) {
    this.cache = {};
    if (!this.cache[fn]) this.cache[fn] = {};
    return function(...args) {
        if (this.cache[fn][args.toString()] === undefined) {
            this.cache[fn][args.toString()] = fn(...args);
        }
        return this.cache[fn][args.toString()];
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */