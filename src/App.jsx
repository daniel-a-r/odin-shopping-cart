import './App.css';
import { Outlet, NavLink } from 'react-router';

function App() {
  return (
    <>
      <header>
        <h1 className='header-name'>Odin Store</h1>
        <nav>
          <ul className='nav-list'>
            <li>
              <NavLink className='navlink' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to='/shop'>
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
