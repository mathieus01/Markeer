import React from 'react';

// import { Container } from './styles';
import { FaPlus, FaUsers, FaChartPie, FaMapMarkerAlt, FaHome, FaMedkit, FaListAlt } from 'react-icons/fa';
import { FiHexagon } from 'react-icons/fi';
import MedicalLogo from '../../assets/images/medical.svg';
import { Link } from 'react-router-dom';
import './style.css';

function Sidebar() {
  return (
    <aside className='sidebar d-none d-lg-block' id='sidebar'>
      <div className='logo d-flex align-items-center'>
        <img src={MedicalLogo} alt='Logo' className='img-fluid' />
        <span>Medical App</span>
      </div>

      <div className='menu'>
        <button className='button primary-button d-flex align-items-center justify-content-between px-lg-1 w-75 mx-lg-auto'>
          <span className='ml-2'>Cadastrar Paciente</span>
          <FaPlus size='14' color='fff' className='mr-2' />
        </button>

        <ul className='menu-list'>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <Link to='/'>
              <FaChartPie size='24' color='#3c4858' />
              <span>Overview</span>
            </Link>
          </li>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <Link to='/patients'>
              <FaUsers size='24' color='#3c4858' />
              <span>Patients</span>
            </Link>
          </li>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <Link to='/groups'>
              <FaHome size='24' color='#3c4858' />
              <span>Equipes</span>
            </Link>
          </li>

          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <FaMapMarkerAlt size='24' color='#3c4858' />
            <span>Map</span>
          </li>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <FaMedkit size='24' color='#3c4858' />
            <span>Doctors</span>
          </li>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <FaListAlt size='24' color='#3c4858' />
            <span>History</span>
          </li>
          <li className='menu-item d-flex align-items-center px-xl-5 px-lg-4 py-3 px-5'>
            <FiHexagon size='24' color='#3c4858' fill='#3c4858' />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
