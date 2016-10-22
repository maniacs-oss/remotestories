/* @flow */

import './styles.css';
import React from 'react';
import next from './next.svg';
import previous from './previous.svg';
import { Link } from 'react-router';
import { pageParam } from 'src/utils';

type Props = {
  page: number,
  totalPages: number,
};

const INNER_WINDOW_COUNT = 3;

export default function Pagination({ page, totalPages }: Props) {
  if (totalPages === 1) return null;

  const innerWindowCount = totalPages - page - INNER_WINDOW_COUNT === 1 ? INNER_WINDOW_COUNT + 1: INNER_WINDOW_COUNT;
  const previousPage = page > 1 ? page - 1 : null;
  const previousGap = page > 3;
  const nextPage = page < totalPages ? page + 1 : null;
  const nextGap = page + innerWindowCount < totalPages;

  return (
    <div className="Pagination">
      {previousPage && (
        <Link to={{ query: { page: previousPage } }}>
          <img src={previous} alt="Previous page" />
        </Link>
      )}

      <PageLink page={1} />

      {previousGap && (
        <span>…</span>
      )}

      {innerWindowPages({ innerWindowCount, page, totalPages }).map((windowPage) =>
        <PageLink key={windowPage} page={windowPage} />
      )}

      {nextGap && (
        <span>…</span>
      )}

      <PageLink page={totalPages} />

      {nextPage && (
        <Link to={{ query: { page: nextPage } }}>
          <img src={next} alt="Next page" />
        </Link>
      )}
    </div>
  );
}

const PageLink = ({ page }) => (
  <Link activeClassName="is-active" isActive={isActive} to={{ query: { page } }}>
    {page}
  </Link>
);

function isActive(location: Object, to: Object) {
  return pageParam(location) === to.query.page;
}

function innerWindowPages({ innerWindowCount, page, totalPages }) {
  const pages = [];
  const startCount = page === 3 ? -1 : 0;

  for (let i = startCount; i < innerWindowCount; i++) {
    const windowPage = page + i;

    if (windowPage > 1 && windowPage < totalPages) {
      pages.push(windowPage);
    }
  }

  return pages;
}
