import React, { JSX } from 'react';
import Home from './components/Home';
import Item from './components/todos/Item';
import Edit from './components/todos/Edit';
import List from './components/todos/List';
import Write from './components/todos/Write';

function App(): JSX.Element {
  const [todo, setTodo] = useState();
  const hancleTodoUpdate = {};

  return (
    <div>
      <p>생각나는 아이디어를 적어주세요.</p>
      <Write />
    </div>
  );
}

export default App;
