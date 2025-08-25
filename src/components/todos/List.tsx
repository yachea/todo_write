import React from 'react';
import { IWriteType, WriteType } from '../../App';
import Item from './Item';

type ListProps = {
  todos: (WriteType | IWriteType)[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onToggle: (id: string) => void;
};

const List = ({ todos, onDelete, onEdit, onToggle }: ListProps) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>List</h2>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#bbb' }}>아이디어를 추가해주세요</p>
      ) : (
        <ul>
          {todos.map(item => (
            <Item
              key={item.id}
              todo={item}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
