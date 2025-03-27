import { useState } from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router';

function App() {
  const [totalItems, setTotalItems] = useState([]);
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
            <li className='cart-quantity'>
              {totalItems.length
                ? totalItems.reduce((acc, cur) => acc + cur.quantity, 0)
                : 0}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet context={[totalItems, setTotalItems]} />
      </main>
    </>
  );
}

export default App;
