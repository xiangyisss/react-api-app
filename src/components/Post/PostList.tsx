import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './Post';
import { PostT } from '../../Utils/Post';

export const PostList = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';

  const [posts, setposts] = useState<PostT[]>();
  useEffect(() => {
    axios.get(baseUrl).then((res) => (res.data ? setposts(res.data) : {}));
  }, []);

  const deleteItem = (id: number) => {
    setposts(posts?.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>Hello world</h1>
      {posts ? (
        <Post posts={posts} handleDelete={deleteItem} />
      ) : (
        <p>No data found!</p>
      )}
    </div>
  );
};
