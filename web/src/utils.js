/* @flow */

import type { Iterable } from 'immutable';

type Location = {
  query?: { page?: string }
}

export function pageParam(location: Location): number {
  if (!location.query || !location.query.page) return 1;
  return parseInt(location.query.page, 10);
}

export function pluck<K, V>(iterable: Iterable<K, V>, keys: Array<K>): Array<V> {
  const results = [];

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];

    if (iterable.has(key)) {
      results.push(iterable.get(key));
    }
  }

  return results;
}

export function randomNumber(maximum: number): number {
  return Math.ceil(Math.random() * (maximum - 1) + 1);
}

export function now(): string {
  const date = new Date();
  return date.toString();
}
