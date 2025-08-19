import React from 'react';
import { IWriteType, WriteType } from '../../App';
import Item from './Item';

type ListProps = {
  todo: (WriteType | IWriteType)[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string, newText: string) => void;
};

const List = ({ todo, onDelete, onEdit }: ListProps) => {
  return (
    <div>
      <h2>목록</h2>
      {todo.length === 0 ? (
        <p>아이디어를 추가해주세요</p>
      ) : (
        <ul>
          {todo.map(item => (
            <Item key={item.id} todoitem={item} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
