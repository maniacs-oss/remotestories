/* @flow */

type Location = {
  query?: { page?: string }
}

export function pageParam(location: Location): number {
  if (!location.query || !location.query.page) return 1;
  return parseInt(location.query.page, 10);
}
