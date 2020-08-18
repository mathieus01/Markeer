import React from 'react';
import { FiHome, FiUser, FiUsers, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MedicalLogo from '../../assets/images/medical.svg';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar d-none d-xl-block' id='sidebar'>
      <div className='logo d-flex align-items-center p-3 px-xl-5 ml-4'>
        <img src={MedicalLogo} alt='Logo' className='img-fluid' />
        <span className='d-lg-none d-xl-block'>Markeer</span>
      </div>

      <div className='menu d-flex flex-column align-items-center '>
        <ul className='menu-list w-100'>
          <li className='menu-item ml-4 px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/' className='d-flex align-items-center'>
              <FiHome size='24' color='#183A63' />
              <span className='font-weight-bold'>Inicio</span>
            </Link>
          </li>
          <li className='menu-item ml-4 px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/patients' className='d-flex align-items-center'>
              <FiUser size='24' color='#183A63' />
              <span className='font-weight-bold'>Pacientes</span>
            </Link>
          </li>
          <li className='menu-item ml-4 px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/groups' className='d-flex align-items-center'>
              <FiUsers size='24' color='#183A63' />
              <span className='font-weight-bold'>Equipes</span>
            </Link>
          </li>
          <li className='menu-item ml-4 px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/schedule' className='d-flex align-items-center'>
              <FiCalendar size='24' color='#183A63' />
              <span className='font-weight-bold'>Agenda</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
