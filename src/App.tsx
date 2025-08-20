import { JSX, useEffect, useState } from 'react';
import Write from './components/todos/Write';
import List from './components/todos/List';

export type WriteType = { id: string; title: string; completed: boolean };
export interface IWriteType {
  id: string;
  title: string;
  completed: boolean;
}

function App(): JSX.Element {
  // 더미데이터
  const initialData: (WriteType | IWriteType)[] = [];
  // 전체목록 관리
  const [todos, setTodo] = useState<(WriteType | IWriteType)[]>(initialData);
  useEffect(() => {
    setTodo(initialData);
  }, []);

  const handleTodoUpdate = (newWrite: WriteType) => {
    const arr: (WriteType | IWriteType)[] = [newWrite, ...todos];
    setTodo(arr);
  };

  const onToggle = (id: string): void => {
    const arr = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodo(arr);
  };

  const onDelete = (id: string): void => {
    const arr = todos.filter(todo => todo.id !== id);
    setTodo(arr);
  };

  const onEdit = (id: string, newTitle: string): void => {
    const arr = todos.map(item => (item.id === id ? { ...item, title: newTitle } : item));
    setTodo(arr);
  };

  return (
    <div>
      <p>생각나는 아이디어를 적어주세요.</p>
      <List todos={todos} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
      <Write setTodo={setTodo} handleTodoUpdate={handleTodoUpdate} />
    </div>
  );
}

export default App;
