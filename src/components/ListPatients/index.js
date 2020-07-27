import React from 'react';
import moment from 'moment';
import Patient1 from '../../assets/images/patient1.jpg';
import { List, Item, Avatar, Section } from './styles';

function ListPatients({ patients, selectPatient }) {
  return (
    <List>
      {patients &&
        patients.map((patient) => (
          <Item key={patient.id} className='d-flex mb-0' onClick={(e) => selectPatient(patient)}>
            <div className='d-flex w-100 px-xl-0 py-2'>
              <div className='col-2 px-0 d-flex justify-content-center align-items-center'>
                <Avatar src={Patient1} alt='patient-avatar' className='img-fluid rounded-circle' />
              </div>
              <Section className='col-10 d-flex flex-column px-0'>
                <div className='d-flex justify-content-between'>
                  <strong>{patient.name}</strong>
                  <small>{moment(patient.birthday).format('DD MMM, YYYY')}</small>
                </div>
                <p className='mb-0'>{patient.email}</p>
                <span>{patient.alergy}</span>
              </Section>
            </div>
          </Item>
        ))}
    </List>
  );
}

export default ListPatients;
