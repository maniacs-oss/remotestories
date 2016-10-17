/* @flow */

import React from 'react';
import fecha from 'fecha';

type Props = {
  time: string,
}

export default function Time({ time }: Props) {
  const formattedTime = formatDate(time);

  return (
    <span>
      <time>{formattedTime}</time> →
    </span>
  );
}

const FORMAT = 'MM.DD.YY hh:mma';

function formatDate(date: string): string {
  return fecha.format(new Date(date), FORMAT);
}
