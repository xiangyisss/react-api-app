import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './Post';
import { Todo } from '../../Utils/Todo';

export const PostList = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos/?_limit=10';

  const [todos, setTodos] = useState<Todo[]>();
  useEffect(() => {
    axios.get(baseUrl).then((res) => (res.data ? setTodos(res.data) : {}));
  }, []);

  const deleteItem = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Hello world</h1>
      {todos ? (
        <Post todos={todos} handleDelete={deleteItem} />
      ) : (
        <p>No data found!</p>
      )}
    </div>
  );
};
