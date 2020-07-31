import React from 'react';
import moment from 'moment';
import { SurgeriesList, SurgeryItem } from './styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FiActivity } from 'react-icons/fi';

function ListSurgery({ surgeries, handleSelectedSurgery, selected }) {
  return (
    <SurgeriesList className={`${selected ? 'd-none d-md-flex' : 'd-flex'}`}>
      <TransitionGroup className='todo-list w-100'>
        {surgeries && surgeries.length > 0 ? (
          surgeries.map((surgery) => (
            <CSSTransition
              key={surgery.id}
              timeout={500}
              classNames='item'
              mountOnEnter={true}
              unmountOnExit={true}
              appear={true}
            >
              <SurgeryItem
                key={surgery.id}
                className='d-flex mb-0'
                onClick={(e) => {
                  if (handleSelectedSurgery) handleSelectedSurgery(surgery);
                }}
              >
                <div className='d-flex w-100 px-xl-0 py-2'>
                  <div className='col-2 px-0 d-flex justify-content-center align-items-center'>
                    <div className='icon blue d-flex align-items-center p-3'>
                      <FiActivity size='16' color='#4AB8FF' />
                    </div>
                  </div>
                  <div className='col-10 d-flex flex-column px-0'>
                    <div className='d-flex justify-content-between'>
                      <strong>{surgery.cause}</strong>
                      <small>{moment(surgery.date).format('DD, MMM, YYYY')}</small>
                    </div>
                    <p className='mb-0'>Queda da escada</p>
                    <span>{surgery.text_report ? surgery.text_report : 'Não informado'}</span>
                  </div>
                </div>
              </SurgeryItem>
            </CSSTransition>
          ))
        ) : (
          <li className='d-flex justify-content-center'>
            <h4 className='text-black-50'>Nenhuma cirurgia encontrada!</h4>
          </li>
        )}
      </TransitionGroup>
    </SurgeriesList>
  );
}

export default ListSurgery;
