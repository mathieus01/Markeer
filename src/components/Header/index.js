import React, { useEffect, useState } from 'react';
import Profile from '../../assets/images/profile.svg';
import { logout, getToken } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';
import { FiMenu, FiLogOut, FiSettings } from 'react-icons/fi';
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
      <nav className='navbar navbar-expand-lg navbar-light px-3 d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <button className='button pt-3 px-3 d-xl-none side-menu' onClick={(e) => toogleSidebar(e)}>
            <FiMenu size='22' />
          </button>
          <FaSearch size={18} color='#3c4858' className='d-none d-lg-flex' />
          <input
            type='text'
            name='search'
            id='search'
            className='header-search py-lg-3 px-2  d-none d-lg-flex'
            placeholder='Search...'
          />
        </div>
        <ul className='navbar-nav d-flex align-items-center'>
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
              <FaBell size={22} color='#3c4858' />
            </a>
            <div className='dropdown-menu p-2' aria-labelledby='navbarDropdownMenuLink'>
              <a className='dropdown-item' href='#'>
                Nenhuma Notificação
              </a>
            </div>
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
        {/* <div class='collapse navbar-collapse' id='navbarNav'>
          <div class='mr-auto'></div>
          <ul class='navbar-nav d-flex align-items-center'>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle notification d-flex align-items-center no-caret'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <FaBell size={22} color='#A0A5B9' />
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <a class='dropdown-item' href='#'>
                  Nenhuma Notificação
                </a>
              </div>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle user-profile d-flex align-items-center '
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <img src={Profile} alt='avatar' className='img-fluid' />
                <span>Matheus Nunes</span>
              </a>
              <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                <a class='dropdown-item' href='#'>
                  Configurações
                </a>
                <a class='dropdown-item' href='#'>
                  Sair
                </a>
              </div>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}

export default Header;
