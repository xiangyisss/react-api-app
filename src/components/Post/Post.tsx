import React from 'react';
import { PostT } from '../../Utils/Post';

interface Props {
  posts: PostT[];
  handleDelete: (postId: number) => void;
}

export const Post = (props: Props) => {
  const { posts, handleDelete } = props;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handleDelete(post.id)}>
            <h3>{post.title}</h3>
            <br></br>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
