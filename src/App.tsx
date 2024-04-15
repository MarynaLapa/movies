import { Outlet } from 'react-router-dom';

import style from './App.module.scss';
import Header from './features/Header/Header';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
