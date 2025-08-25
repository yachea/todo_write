import React, { useState } from 'react';
import { WriteType } from '../../App';

const EditButtonStyled: React.CSSProperties = {
  padding: '3px 8px',
  border: 'none',
  backgroundColor: '#6f6dfa',
  color: '#fff',
  borderRadius: '5px',
};
const CancleButtonStyled: React.CSSProperties = {
  padding: '3px 8px',
  border: 'none',
  backgroundColor: '#8c8c8f',
  color: '#fff',
  borderRadius: '5px',
};

type itemProps = {
  todo: WriteType;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onToggle: (id: string) => void;
};

const Item = ({ todo, onDelete, onEdit, onToggle }: itemProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(todo.title);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
      setIsEdit(false);
    }
  };

  const handleEditCancel = () => {
    setEditTitle(todo.title);
    setIsEdit(false);
  };

  return (
    <li
      style={{
        boxShadow: '0px 2px 8px 2px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px',
        margin: '20px 20px',
        borderRadius: '10px',
        display: 'flex',
        gap: '20px',
      }}
    >
      {isEdit ? (
        <>
          <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <button style={EditButtonStyled} onClick={handleEditSave}>
            저장
          </button>
          <button style={CancleButtonStyled} onClick={handleEditCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
          <span>{todo.title}</span>
          <button style={EditButtonStyled} onClick={handleEdit}>
            수정
          </button>
          <button style={CancleButtonStyled} onClick={() => onDelete(todo.id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default Item;
