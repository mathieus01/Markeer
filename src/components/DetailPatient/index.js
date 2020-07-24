import React from 'react';
import moment from 'moment';
import { FiTrash, FiEdit, FiMapPin, FiBriefcase, FiPhoneCall } from 'react-icons/fi';
import Patient1 from '../../assets/images/patient1.jpg';
import ListSurgeryInline from '../ListSurgeryInline';
import { Container, Avatar, PatientInfo } from './styles';

function DetailPatient({ selectedPatient, confirmDelete, navigateDetailPage }) {
  return (
    <Container className='card h-100 d-flex flex-column'>
      <div className='d-flex d-flex'>
        <div className='col-xl-1 col-2 px-0 d-flex align-items-center ml-xl-2 justify-content-center'>
          <Avatar src={Patient1} alt='avatar' className='img-fluid rounded-circle' />
        </div>
        <div className='col-lg-9  col-10 px-2 pb-2 pt-4 pr-xl-4'>
          <PatientInfo className='d-flex flex-column'>
            <div className='d-flex justify-content-between'>
              <strong>{selectedPatient.email}</strong>
              <small>{moment(selectedPatient.birthday).format('DD MMM, YYYY')}</small>
            </div>
            <p className='mt-2'>{selectedPatient.name}</p>
          </PatientInfo>
        </div>
        <div className='col-lg-1 d-none d-xl-block px-0 col-lg-2 px-2 pt-2'>
          <div className='d-flex justify-content-end ml-3 w-100'>
            <button className='button px-2 mr-1' onClick={(e) => navigateDetailPage(selectedPatient.id)}>
              <FiEdit size={18} color='#8A8F9D' />
            </button>
            <button className='button px-2 mr-2' onClick={(e) => confirmDelete(selectedPatient.id)}>
              <FiTrash size={18} color='#8A8F9D' />
            </button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-end pt-2 pb-xl-5 pb-2'>
        <div className='col-xl-11 col-12 detail-content d-flex '>
          <div className='col-lg-5 px-0 d-flex align-items-center'>
            <FiMapPin size={20} />
            <span className='ml-2'>{selectedPatient.address}</span>
          </div>
          <div className='col-lg-4 px-0 d-flex align-items-center'>
            <FiBriefcase size={20} />
            <span className='ml-2'>{selectedPatient.occupation}</span>
          </div>
          <div className='col-lg-3 px-0 d-flex align-items-center'>
            <FiPhoneCall size={20} />
            <span className='ml-2'>{selectedPatient.phone}</span>
          </div>
        </div>
      </div>

      <div className='d-flex pt-5 justify-content-end'>
        <div className='col-lg-10'>
          <ListSurgeryInline />
        </div>
      </div>
    </Container>
  );
}

export default DetailPatient;
