import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SurgeryActions } from '../../store/ducks/surgery';
import Patient1 from '../../assets/images/patient1.jpg';
import PatientCard from '../PatientCard';
import ListSurgery from '../ListSurgery';
import Loading from '../Loading';
import { Container } from './styles';

function DetailPatient({ surgeryState, selectedPatient, confirmDelete, navigateDetailPage, getSurgeriesRequest }) {
  const [surgeries, setSurgeries] = useState([]);

  useEffect(() => {
    if (selectedPatient && selectedPatient.id) {
      getSurgeriesRequest({ patient: selectedPatient.id });
    }
  }, [selectedPatient, getSurgeriesRequest]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
  }, [surgeryState.surgeries]);

  return (
    <Container className='card h-100 d-flex flex-column'>
      <PatientCard
        patient={selectedPatient}
        avatar={Patient1}
        surgeries={surgeries}
        navigateDetailPage={navigateDetailPage}
      />

      <div className='d-flex mt-xl-5 mt-lg-3'>
        <div className='col-xl-6 col-md-12 px-0'>
          {surgeryState.loading && <Loading />}
          <ListSurgery surgeries={surgeries} />
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...SurgeryActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPatient);
