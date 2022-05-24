import React from 'react';
import { Todo } from '../../Utils/Todo';

interface Props {
  todos: Todo[];
  handleDelete: (todoId: number) => void;
}

export const Post = (props: Props) => {
  const { todos, handleDelete } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleDelete(todo.id)}>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
