import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SurgeryActions } from '../../store/ducks/surgery';
import util from '../../utils/util';
import PatientCard from '../PatientCard';
import ListSurgery from '../ListSurgery';
import Loading from '../Loading';
import { Container } from './styles';

function DetailPatient({
  surgeryState,
  selectedPatient,
  confirmDelete,
  navigateDetailPage,
  getSurgeriesRequest,
  resetSurgeryPage,
}) {
  const [surgeries, setSurgeries] = useState([]);

  useEffect(() => {
    if (selectedPatient && selectedPatient.id) {
      resetSurgeryPage();
      getSurgeriesRequest({ patient: selectedPatient.id });
    }
  }, [selectedPatient, getSurgeriesRequest]);

  // useEffect(() => {
  //   return async () => {
  //     await resetSurgeryPage();
  //   };
  // }, [resetSurgeryPage]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
  }, [surgeryState.surgeries]);

  return (
    <Container className='card h-100 d-flex flex-column overflow-auto'>
      <PatientCard
        patient={selectedPatient}
        avatar={util.getAvatars(
          selectedPatient.gender,
          selectedPatient.avatar ? selectedPatient.avatar : Math.floor(Math.random() * 5)
        )}
        surgeries={surgeries}
        navigateDetailPage={navigateDetailPage}
      />

      <div className='d-flex mt-xl-5 mt-lg-3'>
        <div className='col-md-12 pr-5'>
          {surgeryState.loading && <Loading />}
          <h5 className='pb-2' style={{ borderBottom: '1px solid #eff2f7' }}>
            Cirurgias
          </h5>

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
