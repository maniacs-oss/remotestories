/* @flow */

import type { Location } from 'src/types';

export function pageParam(location: Location): number {
  if (!location.query || !location.query.page) return 1;
  return parseInt(location.query.page, 10);
}

export function randomNumber(maximum: number): number {
  return Math.ceil(Math.random() * (maximum - 1) + 1);
}

export function now(): string {
  const date = new Date();
  return date.toString();
}
