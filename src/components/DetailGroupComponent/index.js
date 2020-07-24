import React from 'react';
import moment from 'moment';
import Patient1 from '../../assets/images/patient1.jpg';
import { FiTrash, FiEdit, FiMapPin, FiBriefcase, FiPhoneCall } from 'react-icons/fi';
import ListUserGroupInline from '../ListUserGroupInline';
import { Container, Avatar, GroupInfo } from './styles';

function DetailGroupComponent({ selectedGroup, confirmDelete }) {
  return (
    <Container className='card h-100 d-flex flex-column py-1 '>
      <div className='d-flex d-flex px-xl-4 px-2'>
        <div className='col-xl-1 col-2 px-0 pb-2 pt-lg-4 d-flex align-items-center ml-xl-2 justify-content-center'>
          <Avatar src={Patient1} alt='avatar' className='img-fluid rounded-circle' />
        </div>
        <div className='col-lg-9  col-10 px-2 pb-2 pt-4 pr-xl-4'>
          <GroupInfo className='d-flex flex-column'>
            <div className='d-flex justify-content-between'>
              <strong>{selectedGroup.description}</strong>
              <small>{moment(selectedGroup.created_by).format('DD MMM, YYYY')}</small>
            </div>
            <p className='mt-2'>{selectedGroup.name}</p>
          </GroupInfo>
        </div>
        <div className='col-lg-1 d-none d-xl-block px-0 col-lg-2 px-2 pt-2'>
          <div className='d-flex justify-content-end ml-3 w-100'>
            <button className='button px-2 mr-1'>
              <FiEdit size={18} color='#8A8F9D' />
            </button>
            <button className='button px-2 mr-2' onClick={(e) => confirmDelete(selectedGroup.id)}>
              <FiTrash size={18} color='#8A8F9D' />
            </button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-end pt-2 pb-xl-5 pb-2'>
        <div className='col-xl-11 col-12 detail-content d-flex '>
          <div className='col-lg-5 px-0 d-flex align-items-center'>
            <FiMapPin size={20} />
            <span className='ml-2'>3 Usuarios</span>
          </div>
          <div className='col-lg-4 px-0 d-flex align-items-center'>
            <FiBriefcase size={20} />
            <span className='ml-2'>5 Pacientes</span>
          </div>
          <div className='col-lg-3 px-0 d-flex align-items-center'>
            <FiPhoneCall size={20} />
            <span className='ml-2'>4 Cirurgias</span>
          </div>
        </div>
      </div>

      <div className='d-flex pt-5 justify-content-end'>
        <div className='col-lg-10'>{<ListUserGroupInline />}</div>
      </div>
    </Container>
  );
}

export default DetailGroupComponent;
