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
    <Container className='container-fluid py-xl-4 px-xl-5 py-lg-0 px-xl-4 px-md-3 p-0'>
      <div className='row h-100'>
        <div className='col-lg-4 col-md-6 col-12 order-md-0 order-1'>
          <div className='card px-3 h-100'>
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
          <div className='px-3 d-flex d-md-none'>
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
