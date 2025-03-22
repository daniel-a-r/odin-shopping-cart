import './App.css';
import { Link } from 'react-router';
import Icon from '@mdi/react';
import { mdiStore } from '@mdi/js';

function App() {
  return (
    <>
      <Icon path={mdiStore} size={10} />
      <h1>
        <Link to='/shop'>Start Shopping Now!</Link>
      </h1>
    </>
  );
}

export default App;
