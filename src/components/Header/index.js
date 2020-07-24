import React from 'react';
import Logo from '../../assets/images/medical.svg';
import Profile from '../../assets/images/profile.jpg';
import { logout } from '../../services/auth';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';
import { FiMenu, FiLogOut, FiSettings } from 'react-icons/fi';
import './style.css';

function Header() {
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
      <nav class='navbar navbar-expand-lg navbar-light px-3 d-flex justify-content-between'>
        <button className='button pt-3 px-3 d-lg-none side-menu' onClick={(e) => toogleSidebar(e)}>
          <FiMenu size='22' />
        </button>
        <div className='d-none d-lg-flex align-items-center'>
          <FaSearch size={18} color='#3c4858' />
          <input
            type='text'
            name='search'
            id='search'
            class='header-search py-lg-4 py-3 px-2  '
            placeholder='Search...'
          />
        </div>
        <ul class='navbar-nav d-flex align-items-center'>
          <li class='nav-item dropdown d-none d-lg-flex'>
            <a
              class='nav-link dropdown-toggle notification d-flex align-items-center no-caret'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <FaBell size={22} color='#3c4858' />
            </a>
            <div class='dropdown-menu p-2' aria-labelledby='navbarDropdownMenuLink'>
              <a class='dropdown-item' href='#'>
                Nenhuma Notificação
              </a>
            </div>
          </li>
          <li class='nav-item dropdown'>
            <a
              class='nav-link dropdown-toggle user-profile d-flex align-items-center no-caret'
              href='#'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img src={Profile} alt='avatar' className='img-fluid' />
              <span className='d-none d-lg-flex'>Matheus Nunes</span>
            </a>
            <div class='dropdown-menu p-2' aria-labelledby='navbarDropdownMenuLink'>
              <a class='dropdown-item' href='#'>
                <FiSettings size={16} className='mr-2' />
                <span>Configurações</span>
              </a>
              <Link to='/signin' class='dropdown-item' onClick={(e) => sair()}>
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
