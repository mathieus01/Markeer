import React from 'react';
import moment from 'moment';
import ProceduresList from '../ProcedureList';
import { Container, Title, SurgeryHeader, SurgeryInfo, SurgeryProcedure, SurgeryPhotos } from './styles';
import { FiEdit, FiMapPin, FiTrash2, FiAlertTriangle, FiCalendar, FiFileText, FiArrowLeft } from 'react-icons/fi';

function DetailSurgery({ surgery, selected, confirmDelete, handleEditSurgery, handleSelectedSurgery }) {
  return (
    <Container className='w-100 px-3 h-100 mt-2 mt-md-0 mx-2 mx-md-0 d-flex flex-column overflow-auto'>
      <div className='card' style={{ height: 'fit-content' }}>
        <SurgeryHeader className='d-flex justify-content-between align-items-center pb-3'>
          <div className='d-flex align-items-center'>
            <button
              type='button'
              className={`button rounded-circle py-0 px-2 align-items-center ${
                selected ? 'd-flex d-md-none' : 'd-none'
              }`}
              onClick={(e) => handleSelectedSurgery(null)}
            >
              <FiArrowLeft size={16} />
            </button>
            <h6 className='mb-0'>Detalhes da Cirurgia</h6>
          </div>

          <div className='surgery-buttons d-flex'>
            <button
              type='button'
              className='button rounded-circle py-0 px-1 d-flex align-items-center text-primary'
              onClick={(e) => handleEditSurgery(surgery)}
            >
              <FiEdit size={16} />
            </button>
            <button
              type='button'
              className='button rounded-circle py-0 px-1 d-flex align-items-center text-danger'
              onClick={(e) => confirmDelete(surgery.id)}
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        </SurgeryHeader>
        <SurgeryInfo className='d-flex flex-column py-3 border-bottom-color'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center'>
              <span className='d-flex flex-column'>
                {surgery.type === '0' && (
                  <strong className='badge badge-warning text-light' style={{ width: 'fit-content' }}>
                    Urgencia
                  </strong>
                )}
                {surgery.type === '1' && (
                  <strong className='badge badge-danger text-light' style={{ width: 'fit-content' }}>
                    Emergencia
                  </strong>
                )}
                {surgery.type === '2' && (
                  <strong className='badge badge-primary text-light' style={{ width: 'fit-content' }}>
                    Eletiva
                  </strong>
                )}
              </span>
            </div>
          </div>
          <div className='d-flex flex-md-row flex-column justify-content-between '>
            <div className='d-flex flex-lg-row  align-items-center my-md-2 mt-2 mb-1'>
              <FiAlertTriangle size={30} className='mr-2 mb-0 text-primary' />
              <span className='d-flex flex-column'>
                <small>Causa da Cirurgia</small>
                <strong>{surgery.cause ? surgery.cause : 'Não informado'}</strong>
              </span>
            </div>
            <div className='d-flex flex-lg-row  align-items-center my-md-2 my-1'>
              <FiMapPin size={30} className='mr-2 mb-0 text-primary' />
              <span className='d-flex flex-column'>
                <small>Local da cirurgia</small>
                <strong>{surgery.location ? surgery.location : 'Não informado'}</strong>
              </span>
            </div>
            <div className='d-flex flex-lg-row  align-items-center my-md-2 my-1'>
              <FiCalendar size={30} className='mr-2 mb-0 text-primary' />
              <span className='d-flex flex-column'>
                <small>Data da Cirurgia</small>
                <strong>{surgery.date ? moment(surgery.date).format('DD/MM/YYYY') : 'Não informado'}</strong>
              </span>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <div className='col-lg-12 px-0 py-2 d-flex align-items-center'>
              <FiFileText size={30} className='mr-2 mb-0 text-primary' />
              <small>Relatorio de Cirurgia</small>
            </div>
            <div className='col-lg-12 px-0 pb-2'>
              <strong>{surgery.text_report ? surgery.text_report : 'Não informado'}</strong>
            </div>
          </div>
        </SurgeryInfo>
      </div>
      <div className='card mt-3' style={{ minHeight: '300px' }}>
        <SurgeryProcedure className='d-flex flex-column border-bottom-color'>
          <Title className='pb-3 mb-2'>
            <h6 className='mb-0'>Procedimentos</h6>
          </Title>

          <ProceduresList procedures={surgery.procedures} />
        </SurgeryProcedure>
      </div>
      <div className='card mt-3' style={{ minHeight: 'fit-content' }}>
        <SurgeryPhotos className='d-flex flex-column'>
          <Title className='pb-3'>
            <h6 className='mb-0'>Fotos</h6>
          </Title>
          <ul className='d-flex w-100 mt-2 flex-wrap'>
            <div className='container px-0'>
              <div className='d-flex flex-wrap'>
                <div className='col-4 px-2'>
                  <li className='d-flex justify-content-center my-2 w-100'>1</li>
                </div>
                <div className='col-4 px-2'>
                  <li className='d-flex justify-content-center my-2 w-100'>1</li>
                </div>
                <div className='col-4 px-2'>
                  <li className='d-flex justify-content-center my-2 w-100'>1</li>
                </div>
                <div className='col-4 px-2'>
                  <li className='d-flex justify-content-center my-2 w-100'>1</li>
                </div>
                <div className='col-4 px-2'>
                  <li className='d-flex justify-content-center my-2 w-100'>1</li>
                </div>
              </div>
            </div>
          </ul>
        </SurgeryPhotos>
      </div>
    </Container>
  );
}

export default DetailSurgery;
