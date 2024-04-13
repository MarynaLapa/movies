import { NavLink, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
       </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
