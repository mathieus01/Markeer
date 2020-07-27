import React from 'react';

import { Container, Title, PatientInfo, PatientType, PatientSection, PatientAvatar } from './styles';
import { Link } from 'react-router-dom';
import { FiEdit, FiLogIn, FiMapPin, FiBriefcase, FiPhoneCall, FiArrowLeft } from 'react-icons/fi';

function PatientCard({ avatar, patient, surgeries, handleEditPatient, navigateDetailPage }) {
  return (
    <Container className='d-flex flex-column align-items-center pb-2 '>
      <Title className='pb-3 d-flex w-100 justify-content-between'>
        <div className='d-flex align-items-center'>
          <Link
            to='/patients'
            className='button rounded-circle py-0 px-2 d-flex d-md-none align-items-center text-primary'
          >
            <FiArrowLeft size={16} />
          </Link>
          <h6 className='mb-0'>Paciente</h6>
        </div>
        {handleEditPatient && (
          <button
            type='button'
            className='button rounded-circle py-0 px-2 d-flex align-items-center text-primary'
            onClick={(e) => handleEditPatient(true)}
          >
            <FiEdit size={16} />
          </button>
        )}
        {navigateDetailPage && (
          <button
            type='button'
            className='button rounded-circle py-0 px-2 d-flex align-items-center text-primary'
            onClick={(e) => navigateDetailPage(patient.id)}
          >
            <FiLogIn size={16} />
          </button>
        )}
      </Title>

      {/* <PatientButtons className=' w-100 d-flex justify-content-between align-items-center'>
        <Link to='/patients' className='button rounded-circle p-2 d-flex align-items-center'>
          <FiArrowLeft size={18} />
        </Link>
        <button
          type='button'
          className='button rounded-circle p-2 d-flex align-items-center'
          onClick={(e) => handleEditPatient(true)}
        >
          <FiEdit size={18} />
        </button>
        
      </PatientButtons> */}
      <PatientInfo className='d-flex flex-row w-100 mt-3'>
        <PatientAvatar
          src={avatar}
          alt='avatar'
          className='img-fluid rounded-circle'
          style={{ background: 'var(--box-shadow-color)', padding: '5px' }}
        />

        <PatientType className='d-flex w-100'>
          <div className='col-6 d-flex flex-column align-items-center py-2'>
            <strong>{surgeries && surgeries.length}</strong>
            <span>Cirurgias</span>
          </div>
          <div className='col-6 d-flex flex-column align-items-center py-2'>
            <strong>0</strong>
            <span>Consultas</span>
          </div>
        </PatientType>
      </PatientInfo>
      <PatientSection className='d-flex flex-column w-100'>
        <strong className=' mt-2'>{patient.name}</strong>
        <div className='d-flex align-items-center px-0'>
          <FiBriefcase size={16} className='mr-2' />
          <span>{patient.occupation ? patient.occupation : 'Não informado'}</span>
        </div>
        <div className='d-flex align-items-center px-0'>
          <FiPhoneCall size={16} className='mr-2' />
          <span>{patient.phone ? patient.phone : 'Não informado'}</span>
        </div>
        <div className='d-flex align-items-center px-0'>
          <FiMapPin size={16} className='mr-2' />
          <span>{patient.address ? patient.address : 'Não informado'}</span>
        </div>
      </PatientSection>
    </Container>
  );
}

export default PatientCard;
