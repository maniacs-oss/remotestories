/* @flow */

import './styles.css';
import Box from 'src/shared/box';
import React from 'react';
import type { Comment as CommentType } from 'src/types';

type Props = {
  comments: Array<CommentType>,
};

export default function CommentList({ comments }: Props) {
  if (comments.length === 0) return <Box className="CommentList-placeholder" title="No comments yet." />;

  return (
    <ol className="CommentList">
      {comments.map((comment, index) => {
        const title = index === 0 ? titleFor(comments.length) : null;

        return (
          <li key={comment.id}>
            <Box title={title}>
              <Comment comment={comment} />
            </Box>
          </li>
        );
      })}
    </ol>
  );
}

function titleFor(count: number) {
  if (count === 1) return '1 Comment';

  return `${ count } Comments`;
}

function Comment({ comment }: { comment: CommentType }) {
  const id = `comment-${ comment.id }`;

  return (
    <div className="Comment" id={id}>
      <div className="Comment-user">
        #{comment.user_id} commented
      </div>

      <div className="Comment-body">
        {comment.body}
      </div>

      <div className="Comment-time">
        <a className="Time" href={`#${ id }`}>
          09.16.16 8:31am →
        </a>
      </div>
    </div>
  );
}
