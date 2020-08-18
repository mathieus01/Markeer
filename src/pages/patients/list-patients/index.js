import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import ListComponent from '../../../components/ListPatients';
import DetailPatient from '../../../components/DetailPatient';
import CreatePatient from '../../../components/CreatePatient';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import { FiPlus } from 'react-icons/fi';
import { Container, ListPatientTitle } from './styles';

const ListPatients = ({ patientState, getPatientsRequest, removePatientRequest, history, ...rest }) => {
  const [page, setPage] = useState(0);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [openModalPatient, setOpenModalPatient] = useState(false);

  useEffect(() => {
    getPatients();
  }, []);

  useEffect(() => {
    setPatients(patientState.patients);
    if (patientState.patients.length) {
      setSelectedPatient(patientState.patients[0]);
    }
  }, [patientState.patients]);

  const removePatient = (id) => {
    removePatientRequest(id);
  };

  const navigateDetailPage = (id) => {
    history.push(`/patients/${id}`);
  };

  const handleOpenModalPatient = (value) => {
    setOpenModalPatient(value);
  };

  const selectPatient = (patient) => {
    if (document.getElementById('root').offsetWidth <= 768) {
      navigateDetailPage(patient.id);
    } else {
      setSelectedPatient(patient);
    }
  };

  function getPatients() {
    if (patientState.page < patientState.lastPage || page === 0) {
      setPage(page + 1);
      getPatientsRequest(page + 1);
    }
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Excluir Paciente',
      text: 'Tem certeza que deseja excluir esse paciente ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        removePatient(id);
      }
    });
  };

  return (
    <Container className='container-fluid h-100 pb-xl-0 pt-xl-4 px-xl-5 py-lg-3 px-xl-4 px-md-3 py-md-3 p-0'>
      <div class='page-title mt-2'>
        <div class='row justify-content-between align-items-center'>
          <div class='col-md-6 col-12 mb-1 mb-md-0 px-4 px-md-3'>
            <h5 class='h3 font-weight-400 mb-0 text-white'>Pacientes</h5>
            <div class='align-items-center d-inline-flex'>
              <span class='h4 text-warning mb-0 mr-2'>{patientState.total}</span>
              <span class='text-sm opacity-7 text-white'>Pacientes</span>
            </div>
          </div>
        </div>
      </div>
      <div className='row h-100 pt-2 pt-md-3'>
        <div className='col-xl-4 col-lg-5 col-md-6'>
          <div className='card h-100 mx-2 mx-md-0 mt-2 mt-md-0'>
            <ListPatientTitle className='pb-3 mb-2 d-flex w-100 justify-content-between'>
              <h6 className='mb-0'>Pacientes</h6>

              <button
                type='button'
                className='button rounded-circle py-0 px-2 d-flex align-items-center text-primary'
                onClick={(e) => handleOpenModalPatient(true)}
              >
                <FiPlus size={16} />
              </button>
            </ListPatientTitle>
            {patientState.loading && <Loading />}
            <ListComponent patients={patients} selectPatient={selectPatient} getPatients={getPatients} />
          </div>
        </div>
        <div className='col-xl-8 col-lg-7 col-md-6 pl-xl-4 pl-md-2 d-none d-md-block'>
          {selectedPatient && (
            <DetailPatient
              selectedPatient={selectedPatient}
              confirmDelete={confirmDelete}
              navigateDetailPage={navigateDetailPage}
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={openModalPatient}
        onRequestClose={(e) => handleOpenModalPatient(false)}
        contentLabel='Patient Modal'
        className='modal-component'
        overlayClassName='overlay'
      >
        <CSSTransition
          in={openModalPatient}
          mountOnEnter={true}
          unmountOnExit={true}
          appear={true}
          timeout={1000}
          classNames='my-node'
        >
          <CreatePatient closeModal={handleOpenModalPatient} />
        </CSSTransition>
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  patientState: state.patient,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PatientActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListPatients);
