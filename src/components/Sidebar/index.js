import React, { useEffect, useState } from 'react';
import { FiHome, FiUser, FiUsers, FiCalendar, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MedicalLogo from '../../assets/images/medical.svg';
import util from '../../utils/util';
import { logout, getToken } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { Container, UserArea, Logo, Menu, List, Item } from './styles';

function Sidebar({ props }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token !== null && token !== 'undefined') {
      const { data } = jwtDecode(token);
      console.log(data);
      setUser(data);
    }
  }, []);

  function isSelected(data) {
    const { pathname } = props.history.location;
    const aux = pathname.replace(/([/-D])/g, '');
    return aux === data;
  }

  return (
    <Container className='sidebar d-none d-xl-flex' id='sidebar'>
      <Logo className='logo d-flex align-items-center px-0 mb-4 mt-2'>
        <img src={MedicalLogo} alt='Logo' className='img-fluid' />
        <span>Markeer</span>
      </Logo>
      <UserArea className='logo d-flex align-items-center '>
        <img
          src={user && util.getAvatars(user.gender, user.avatar ? user.avatar : Math.floor(Math.random() * 5))}
          alt='avatar'
          className='img-fluid'
        />
        <div className='d-flex flex-column'>
          <span>{user && user.username}</span>
          <small
            className='d-flex align-items-center'
            onClick={(e) => {
              logout();
            }}
          >
            <FiLogOut size={13} className='mr-2' color='#FFF' />
            Sair
          </small>
        </div>
      </UserArea>

      <Menu className='menu '>
        <List className='menu-list w-100'>
          <Item className='menu-item' isSelected={isSelected('')}>
            <Link to='/' className='d-flex align-items-center px-4'>
              <FiHome size='20' color='#183A63' />
              <span className='font-weight-bold'>Inicio</span>
            </Link>
          </Item>
          <Item className='menu-item' isSelected={isSelected('patients')}>
            <Link to='/patients' className='d-flex align-items-center px-4'>
              <FiUser size='20' color='#183A63' />
              <span className='font-weight-bold'>Pacientes</span>
            </Link>
          </Item>
          <Item className='menu-item ' isSelected={isSelected('groups')}>
            <Link to='/groups' className='d-flex align-items-center px-4'>
              <FiUsers size='20' color='#183A63' />
              <span className='font-weight-bold'>Equipes</span>
            </Link>
          </Item>
          <Item className='menu-item ' isSelected={isSelected('schedule')}>
            <Link to='/schedule' className='d-flex align-items-center px-4'>
              <FiCalendar size='20' color='#183A63' />
              <span className='font-weight-bold'>Agenda</span>
            </Link>
          </Item>
        </List>
      </Menu>
    </Container>
  );
}

export default Sidebar;
