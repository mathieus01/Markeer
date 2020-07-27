import React from 'react';
// import { Container } from './styles';
import { FaChartPie, FaHome, FaPlus, FaUsers } from 'react-icons/fa';
import { FiHexagon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MedicalLogo from '../../assets/images/medical.svg';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar d-none d-xl-block' id='sidebar'>
      <div className='logo d-flex align-items-center p-3 px-xl-5'>
        <img src={MedicalLogo} alt='Logo' className='img-fluid' />
        <span>Markeer</span>
      </div>

      <div className='menu d-flex flex-column align-items-center '>
        <button className='button primary-button d-flex align-items-center justify-content-between px-lg-1 w-75 px-lg-auto mx-0'>
          <span className='ml-2'>Cadastrar Paciente</span>
          <FaPlus size='14' color='fff' className='mr-2' />
        </button>

        <ul className='menu-list'>
          <li className='menu-item d-flex align-items-center justify-content-center px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/'>
              <FaChartPie size='24' color='#3c4858' />
              <span>Overview</span>
            </Link>
          </li>
          <li className='menu-item d-flex align-items-center justify-content-center px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/patients'>
              <FaUsers size='24' color='#3c4858' />
              <span>Patients</span>
            </Link>
          </li>
          <li className='menu-item d-flex align-items-center justify-content-center px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/groups'>
              <FaHome size='24' color='#3c4858' />
              <span>Equipes</span>
            </Link>
          </li>

          <li className='menu-item d-flex align-items-center justify-content-center px-xl-5 px-lg-2 py-3 px-5'>
            <Link to='/'>
              <FiHexagon size='24' color='#3c4858' fill='#3c4858' />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
