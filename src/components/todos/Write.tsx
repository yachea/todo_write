import React, { useState } from 'react';
import { IWriteType, WriteType } from '../../App';
import { IoIosSend } from 'react-icons/io';

const DivSta: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  paddingTop: '100px',
};
const InputStyled: React.CSSProperties = {
  width: '100%',
  borderRadius: '10px',
  border: '1px solid #ccc',
};

const ButtonStyle: React.CSSProperties = {
  borderRadius: '10px',
  border: 'none',
  width: '70px',
  height: '50px',
  backgroundColor: '#ccc',
  color: '#fff',
  fontWeight: 700,
};

type WriteProps = {
  setTodo: React.Dispatch<React.SetStateAction<(WriteType | IWriteType)[]>>;
  handleTodoUpdate: (newWrite: WriteType) => void;
};

const Write = ({ setTodo, handleTodoUpdate }: WriteProps) => {
  const [title, setTitle] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    if (title.trim()) {
      const newWrite: WriteType = {
        id: Date.now().toString(),
        title: title,
        completed: false,
      };
      handleTodoUpdate(newWrite);
      setTitle('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <div style={DivSta}>
        <input
          style={InputStyled}
          type="text"
          value={title}
          onChange={e => handleChange(e)}
          onKeyDown={e => handleKeyDown(e)}
        />
        <button onClick={handleAdd} style={ButtonStyle}>
          <div>
            <IoIosSend />
          </div>
          보내기
        </button>
      </div>
    </div>
  );
};

export default Write;
