import { NavLink, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className='App-link'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='App-link'>About</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className='App-link'>Movies</NavLink>
            </li>  
          </ul>
        </nav>
      </header>
      <main className='App-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
