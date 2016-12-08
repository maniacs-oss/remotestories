/* @flow */

import type { Location } from 'src/types';

export function pageParam(location: Location): number {
  if (!location.query || !location.query.page) return 1;
  return parseInt(location.query.page, 10);
}

export function canUseLocalStorage() {
  const mod = 'modernizr';

  try {
    localStorage.setItem(mod, mod);
    localStorage.removeItem(mod);
    return true;
  } catch (e) {
    return false;
  }
}
