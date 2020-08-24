import React from 'react';
import moment from 'moment';
import { Container, Title, PatientInfo, PatientType, PatientSection, PatientAvatar } from './styles';
import { Link } from 'react-router-dom';
import {
  FiEdit,
  FiLogIn,
  FiMapPin,
  FiBriefcase,
  FiPhoneCall,
  FiArrowLeft,
  FiSunrise,
  FiMail,
  FiHeart,
  FiMeh,
} from 'react-icons/fi';

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
      <PatientInfo className='d-flex flex-row align-items-center w-100 mt-3'>
        <div className='col-3 px-0'>
          <PatientAvatar
            src={avatar}
            alt='avatar'
            className='img-fluid rounded-circle'
            style={{ background: 'var(--box-shadow-color)', padding: '2px' }}
          />
        </div>
        <div className='col-9 px-0'>
          <PatientType className='d-flex w-100'>
            <div className='col-6 pl-2 py-2 pr-0'>
              <span class='badge badge-primary py-1'>
                <span class='badge badge-light '>{surgeries && surgeries.length}</span>{' '}
                <strong className='text-white'>Cirurgias</strong>
              </span>
            </div>
            <div className='col-6  p-2'>
              <span class='badge badge-warning py-1'>
                <span class='badge badge-light'>0</span> <strong className='text-white'>Consultas</strong>
              </span>
            </div>
          </PatientType>
        </div>
      </PatientInfo>
      <PatientSection className='d-flex flex-column w-100'>
        <strong className='mb-0 mt-2'>{patient.name}</strong>
        <div className='d-flex align-items-center px-0 my-1'>
          <FiBriefcase size={18} className='mr-2' />
          <span>
            Trabalha como{' '}
            <strong className='text-title-color'>{patient.occupation ? patient.occupation : 'Não informado'}</strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiPhoneCall size={18} className='mr-2' />
          <span>
            Contato <strong className='text-title-color'>{patient.phone ? patient.phone : 'Não informado'}</strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiMail size={18} className='mr-2' />
          <span>
            Email <strong className='text-title-color'>{patient.email ? patient.email : 'Não informado'}</strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiMapPin size={18} className='mr-2' />
          <span>
            Mora em <strong className='text-title-color'>{patient.address ? patient.address : 'Não informado'}</strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiHeart size={18} className='mr-2' />
          <span>
            Plano de saude{' '}
            <strong className='text-title-color'>{patient.helthcare ? patient.helthcare : 'Não informado'}</strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiSunrise size={18} className='mr-2' />
          <span>
            Possui
            <strong className='text-title-color'>
              {patient.birthday
                ? ` ${moment(new Date()).diff(moment(patient.birthday), 'year')} Anos`
                : ' Idade Não informada'}
            </strong>
          </span>
        </div>
        <div className='d-flex align-items-center px-0 mb-1'>
          <FiMeh size={18} className='mr-2' />
          <span>
            Alergias
            <strong className='text-title-color'> {patient.alergy ? patient.alergy : 'Não Informada'}</strong>
          </span>
        </div>
      </PatientSection>
    </Container>
  );
}

export default PatientCard;
