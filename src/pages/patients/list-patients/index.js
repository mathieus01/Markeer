import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import ListComponent from '../../../components/ListPatients';
import DetailPatient from '../../../components/DetailPatient';
import CreatePatient from '../../../components/CreatePatient';
import Swal from 'sweetalert2';
import { FiPlus } from 'react-icons/fi';
import { Container, ListPatientTitle } from './styles';

const ListPatients = ({ patientState, getPatientsRequest, removePatientRequest, history, ...rest }) => {
  const [addPatient, setAddPatient] = useState(false);
  const [page, setPage] = useState(1);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [openModalPatient, setOpenModalPatient] = useState(false);

  useEffect(() => {
    getPatientsRequest(page);
  }, [getPatientsRequest, page]);

  useEffect(() => {
    setPatients(patientState.patients);
    if (patientState.patients.length) {
      setSelectedPatient(patientState.patients[0]);
    }
  }, [patientState.patients]);

  const removePatient = (id) => {
    removePatientRequest(id);
  };

  const handleAddPatient = (value) => {
    setAddPatient(value);
  };

  const getPatients = () => {
    if (patientState.page < patientState.lastPage) {
      setPage(page + 1);
      getPatientsRequest(page + 1);
    }
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
        // alert(id);
      }
    });
  };

  return (
    <Container className='container-fluid h-100 py-xl-4 px-xl-5 py-lg-3 px-xl-4 px-md-3 py-md-3 p-0'>
      <div className='row h-100'>
        <div className='col-md-4'>
          <div className='card h-100 mx-2 mx-md-0 mt-2 mt-md-0'>
            <ListPatientTitle className='pb-3 mb-2 d-flex w-100 justify-content-between'>
              <h6 className='mb-0'>Pacientes</h6>

              <button
                type='button'
                className='button rounded-circle py-0 px-2 d-flex align-items-center'
                onClick={(e) => handleOpenModalPatient(true)}
              >
                <FiPlus size={16} />
              </button>
            </ListPatientTitle>
            <ListComponent patients={patients} selectPatient={selectPatient} />
          </div>
        </div>
        <div className='col-lg-8 col-md-7 pl-xl-4 pl-md-2 d-none d-md-block'>
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
