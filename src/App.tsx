import { JSX, useEffect, useState } from 'react';
import Write from './components/todos/Write';
import List from './components/todos/List';

export type WriteType = { id: string; title: string; text: string };
export interface IWriteType {
  id: string;
  title: string;
  text: string;
}

function App(): JSX.Element {
  // 더미데이터
  const initialData: (WriteType | IWriteType)[] = [];
  // 전체목록 관리
  const [todo, setTodo] = useState<(WriteType | IWriteType)[]>(initialData);
  useEffect(() => {
    setTodo(initialData);
  }, []);

  const handleTodoUpdate = (newWrite: WriteType) => {
    const arr: (WriteType | IWriteType)[] = [newWrite, ...todo];
    setTodo(arr);
  };

  const onDelete = (id: string): void => {
    const arr = todo.filter(todo => todo.id !== id);
    setTodo(arr);
  };

  const onEdit = (id: string, newTitle: string, newText: string): void => {
    const arr = todo.map(item =>
      item.id === id ? { ...item, title: newTitle, text: newText } : item,
    );
    setTodo(arr);
  };

  return (
    <div>
      <p>생각나는 아이디어를 적어주세요.</p>
      <List todo={todo} onDelete={onDelete} onEdit={onEdit} />
      <Write setTodo={setTodo} handleTodoUpdate={handleTodoUpdate} />
    </div>
  );
}

export default App;
