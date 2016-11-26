/* @flow */

import './styles.css';
import Layout from 'src/shared/layout';
import React from 'react';

export default function Loading({ skeletonCount = 1 }: { skeletonCount?: number }) {
  const skeletons = Array.from(Array(skeletonCount));

  return (
    <Layout>
      {skeletons.map((_, index) =>
        <div className="Loading-skeleton" key={index}>
          <div className="Loading-skeleton-1" />
          <div className="Loading-skeleton-2" />
          <div className="Loading-skeleton-3" />
          <div className="Loading-skeleton-4" />
          <div className="Loading-skeleton-5" />
          <div className="Loading-skeleton-6" />
          <div className="Loading-skeleton-7" />
          <div className="Loading-skeleton-8" />
        </div>
      )}
    </Layout>
  );
}
