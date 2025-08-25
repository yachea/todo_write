import { JSX, useEffect, useState } from 'react';
import Write from './components/todos/Write';
import List from './components/todos/List';

export type WriteType = { id: string; title: string; completed: boolean };
export interface IWriteType {
  id: string;
  title: string;
  completed: boolean;
}
const MainStayle: React.CSSProperties = {
  margin: '50px auto',
  width: '70%',
  padding: '10px',
  boxShadow: '0px 4px 12px 4px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  borderRadius: '20px',
};

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
      <header style={{ height: '50px', width: '100%', borderBottom: '1px soild #000' }}>
        <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>IDEA</div>
      </header>
      <div style={MainStayle}>
        <List todos={todos} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
        <Write setTodo={setTodo} handleTodoUpdate={handleTodoUpdate} />
      </div>
    </div>
  );
}

export default App;
