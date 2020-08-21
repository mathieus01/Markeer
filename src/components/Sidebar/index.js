import React from 'react';
import { FiHome, FiUser, FiUsers, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MedicalLogo from '../../assets/images/medical.svg';
import { Container, Logo, Menu, List, Item } from './styles';

function Sidebar() {
  return (
    <Container className='sidebar d-none d-xl-flex' id='sidebar'>
      <Logo className='logo d-flex align-items-center '>
        <img src={MedicalLogo} alt='Logo' className='img-fluid' />
        <span className='d-lg-none d-xl-block'>Markeer</span>
      </Logo>

      <Menu className='menu '>
        <List className='menu-list w-100'>
          <Item className='menu-item '>
            <Link to='/' className='d-flex align-items-center'>
              <FiHome size='20' color='#183A63' />
              <span className='font-weight-bold'>Inicio</span>
            </Link>
          </Item>
          <Item className='menu-item'>
            <Link to='/patients' className='d-flex'>
              <FiUser size='20' color='#183A63' />
              <span className='font-weight-bold'>Pacientes</span>
            </Link>
          </Item>
          <Item className='menu-item '>
            <Link to='/groups' className='d-flex align-items-center'>
              <FiUsers size='20' color='#183A63' />
              <span className='font-weight-bold'>Equipes</span>
            </Link>
          </Item>
          <Item className='menu-item '>
            <Link to='/schedule' className='d-flex align-items-center'>
              <FiCalendar size='20' color='#183A63' />
              <span className='font-weight-bold'>Agenda</span>
            </Link>
          </Item>
        </List>
      </Menu>
      <div></div>
    </Container>
  );
}

export default Sidebar;
