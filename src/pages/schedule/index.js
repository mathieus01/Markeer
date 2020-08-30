import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SurgeryActions } from '../../store/ducks/surgery';
import moment from 'moment';
import Util from '../../utils/util';
import Calendar from '../../components/Calendar';
import ListSurgery from '../../components/ListSurgery';
import TitleCard from '../../components/TitleCard';
import { Container, PageTitle, Input } from './styles';
import { FiMenu } from 'react-icons/fi';

function Schedule({ surgeryState, getSurgeriesRequest }) {
  const [dtFilter, setDtFilter] = useState(new Date());
  const [surgeries, setSurgeries] = useState(null);

  useEffect(() => {
    console.log('teste');
    getSurgeries(dtFilter);
  }, [dtFilter]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
  }, [surgeryState.surgeries]);

  function getSurgeries(dtSurgery) {
    getSurgeriesRequest({ dtSurgery });
  }

  function handleDateClick({ date, dateStr }) {
    setDtFilter(date);
    getSurgeries(date);
  }

  return (
    <Container className='container-fluid pb-xl-0  px-xl-5 px-xl-4 px-md-3 p-0'>
      <PageTitle className='mx-2 mx-md-0 pb-0 pb-md-4'>
        <div class='d-flex justify-content-between align-items-center'>
          <div class='d-flex align-items-center justify-content-between col-12 mb-1 mb-md-0 px-0'>
            <div>
              <h5 class='h3 font-weight-600 mb-0 '>Agenda</h5>
              <div class='align-items-center d-inline-flex'>
                <span class='text-sm opacity-8'>
                  Data selecionada: <strong className='text-primary'>{moment(dtFilter).format('DD/MM/YYYY')}</strong>
                </span>
              </div>
            </div>
            <button
              className='button pt-3 px-3 mr-1 d-xl-none side-menu text-primary'
              onClick={(e) => Util.toogleSidebar(e)}
            >
              <FiMenu size='22' />
            </button>
          </div>
        </div>
      </PageTitle>
      <div className='row '>
        <div className='col-lg-4 col-md-6 col-12 order-md-0 order-1'>
          <div className='card mx-2 mx-md-0 mt-2 mt-md-0 h-100' style={{ minHeight: '85vh' }}>
            <TitleCard className='mb-3'>
              <h6 className='pb-2'>Eventos</h6>
            </TitleCard>
            <ListSurgery surgeries={surgeries} />
          </div>
        </div>
        <div className='col-lg-8 col-md-6 col-12  order-0 order-md-1 border-left'>
          <div className='card d-none d-md-flex'>
            <Calendar handleDateClick={handleDateClick} />
          </div>
          <div className=' mx-2 mx-md-0 mt-2 mt-md-0 d-flex d-md-none'>
            <Input
              type='date'
              placeholder='Informe uma data'
              value={moment(dtFilter).format('YYYY-MM-DD')}
              onChange={(e) => {
                setDtFilter(Util.stringToDateAmerican(e.target.value));
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...SurgeryActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
