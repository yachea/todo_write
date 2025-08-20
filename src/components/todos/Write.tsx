import React, { useState } from 'react';
import { IWriteType, WriteType } from '../../App';
import { IoIosSend } from 'react-icons/io';

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

  return (
    <div>
      <div>
        <input type="textarea" value={title} onChange={e => handleChange(e)} />
        <button onClick={handleAdd}>
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
