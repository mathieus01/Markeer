import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SurgeryActions } from '../../store/ducks/surgery';
import moment from 'moment';
import Util from '../../utils/util';
import Calendar from '../../components/Calendar';
import ListSurgery from '../../components/ListSurgery';
import TitleCard from '../../components/TitleCard';
import { Container, Input } from './styles';

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
    <Container className='container-fluid pb-xl-0 pt-xl-4 px-xl-5 py-lg-3 px-xl-4 px-md-3 py-md-3 p-0'>
      <div class='page-title '>
        <div class='row justify-content-between align-items-center'>
          <div class='col-md-6 col-12 mb-1 mb-md-0 px-4 px-md-3'>
            <h5 class='h3 font-weight-400 mb-0 text-title-color'>Agenda</h5>
            <span class='text-sm opacity-8 d-none d-md-flex text-title-color'>
              Data selecionada: <b className='text-primary'>{moment(dtFilter).format('DD/MM/YYYY')}</b>
            </span>
          </div>
        </div>
      </div>
      <div className='row pt-2'>
        <div className='col-lg-4 col-md-6 col-12 order-md-0 order-1'>
          <div className='card px-3 mx-2 mx-md-0 mt-2 mt-md-0 h-100' style={{ minHeight: '85vh' }}>
            <TitleCard className='mb-3'>
              <h6 className='pb-2'>Eventos</h6>
            </TitleCard>
            <ListSurgery surgeries={surgeries} />
          </div>
        </div>
        <div className='col-lg-8 col-md-6 col-12 order-0 order-md-1'>
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
