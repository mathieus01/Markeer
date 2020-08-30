import React from 'react';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FiChevronDown } from 'react-icons/fi';
import { List, Item, Avatar, Section } from './styles';
import util from '../../utils/util';

function ListPatients({ patients, selectPatient, getPatients }) {
  return (
    <List id='patientList'>
      <InfiniteScroll
        dataLength={patients.length}
        next={getPatients}
        hasMore={true}
        scrollableTarget='patientList'
        className='h-100'
      >
        {patients &&
          patients.map((patient) => (
            <Item key={patient.id} className='d-flex mb-0 py-2' onClick={(e) => selectPatient(patient)}>
              <div className='d-flex w-100 px-xl-0'>
                <div className='col-2 px-0 d-flex justify-content-center align-items-center'>
                  <Avatar
                    src={util.getAvatars(
                      patient.gender,
                      patient.avatar ? patient.avatar : Math.floor(Math.random() * 5)
                    )}
                    alt='patient-avatar'
                    className='img-fluid rounded-circle'
                  />
                </div>
                <Section className='col-10 d-flex flex-column px-0'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <strong>{patient.name}</strong>
                    <small>{moment(patient.birthday).format('DD MMM, YYYY')}</small>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>{patient.email}</p>
                    <div class='dropdown'>
                      <button
                        className='button rounded-circle py-0 px-2 d-flex align-items-center text-primary'
                        type='button'
                        id='dropdownMenuButton'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <FiChevronDown size={16} />
                      </button>
                      <div class='dropdown-menu px-1' aria-labelledby='dropdownMenuButton'>
                        <a class='dropdown-item px-2' href='#'>
                          Action
                        </a>
                        <a class='dropdown-item px-2' href='#'>
                          Another action
                        </a>
                        <a class='dropdown-item px-2' href='#'>
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <span>{patient.alergy}</span>
                </Section>
              </div>
            </Item>
          ))}
      </InfiniteScroll>
    </List>
  );
}

export default ListPatients;
