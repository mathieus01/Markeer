import React, { useEffect, useState } from 'react';
import Profile from '../../assets/images/profile.svg';
import { logout, getToken } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogOut, FiBell, FiSearch, FiSettings } from 'react-icons/fi';
import './style.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token !== null && token !== 'undefined') {
      const { data } = jwtDecode(token);
      setUser(data);
    }
  }, []);

  const toogleSidebar = (e) => {
    var nav = document.querySelector('#sidebar');
    nav.classList.toggle('d-flex');
    e.preventDefault();
  };

  const sair = () => {
    logout();
  };

  return (
    <div className='header_area'>
      <nav className='navbar navbar-expand-lg navbar-light mx-0 px-xl-5 px-0 py-xl-2 py-lg-0  d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <button className='button pt-3 px-3 d-xl-none side-menu text-primary' onClick={(e) => toogleSidebar(e)}>
            <FiMenu size='22' />
          </button>
          <FiSearch size={18} color='#fff' className='d-none d-lg-flex' />
          <input
            type='text'
            name='search'
            id='search'
            className='header-search py-lg-3 px-2  d-none d-lg-flex'
            placeholder='procurar...'
          />
        </div>
        <ul className='navbar-nav d-flex align-items-center px-3'>
          <li className='nav-item dropdown d-none d-lg-flex'>
            <a
              className='nav-link dropdown-toggle notification d-flex align-items-center no-caret'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <FiBell size={22} color='#fff' />
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle user-profile d-flex align-items-center no-caret'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                src={Profile}
                alt='avatar'
                className='img-fluid'
                style={{ background: 'var(--box-shadow-color)', padding: '5px' }}
              />
              <span className='d-none d-lg-flex'>{user && user.username}</span>
            </a>
            <div className='dropdown-menu p-2' aria-labelledby='navbarDropdownMenuLink'>
              <a className='dropdown-item' href='#'>
                <FiSettings size={16} className='mr-2' />
                <span>Configurações</span>
              </a>
              <Link to='/signin' className='dropdown-item' onClick={(e) => sair()}>
                <FiLogOut size={16} className='mr-2' />
                <span>Sair</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
