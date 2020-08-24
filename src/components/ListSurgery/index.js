import React from 'react';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SurgeriesList, SurgeryItem } from './styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FiActivity } from 'react-icons/fi';

function ListSurgery({ surgeries, handleSelectedSurgery, getSurgeries, selected }) {
  const showSurgery = surgeries !== null && surgeries.length > 0;

  function handleTypeSurgery(type) {
    if (type === '0') {
      return 'warning';
    } else if (type === '1') {
      return 'danger';
    } else {
      return 'primary';
    }
  }

  return (
    <SurgeriesList id='surgeryList' className={`${selected ? 'd-none d-md-flex' : 'd-flex'}`}>
      {showSurgery && (
        <InfiniteScroll dataLength={surgeries.length} next={getSurgeries} hasMore={true} scrollableTarget='surgeryList'>
          <TransitionGroup className={`todo-list ${showSurgery && 'w-100'}`}>
            {surgeries.map((surgery) => (
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
                      <div className={`icon blue d-flex align-items-center p-3 bg-${handleTypeSurgery(surgery.type)}`}>
                        <FiActivity size='16' color='#FFF' />
                      </div>
                    </div>
                    <div className='col-10 d-flex flex-column px-0'>
                      <div className='d-flex justify-content-between'>
                        <strong>{surgery.cause}</strong>
                        <small>{moment(surgery.date).format('DD, MMM, YYYY')}</small>
                      </div>
                      <p className='mb-0'>Queda da escada</p>
                      {surgery.type === '0' && (
                        <span
                          className={`text-light badge badge-${handleTypeSurgery(surgery.type)}`}
                          style={{ width: 'fit-content' }}
                        >
                          Urgencia
                        </span>
                      )}
                      {surgery.type === '1' && (
                        <span
                          className={`text-light badge badge-${handleTypeSurgery(surgery.type)}`}
                          style={{ width: 'fit-content' }}
                        >
                          Emergencia
                        </span>
                      )}
                      {surgery.type === '2' && (
                        <span
                          className={`text-light badge badge-${handleTypeSurgery(surgery.type)}`}
                          style={{ width: 'fit-content' }}
                        >
                          Eletiva
                        </span>
                      )}
                    </div>
                  </div>
                </SurgeryItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </InfiniteScroll>
      )}
      {!showSurgery && (
        <li className='d-flex justify-content-center w-100'>
          <h4 className='text-black-50'>Nenhuma cirurgia encontrada!</h4>
        </li>
      )}
    </SurgeriesList>
  );
}

export default ListSurgery;
