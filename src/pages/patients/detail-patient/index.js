import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CSSTransition } from 'react-transition-group';
import { Creators as PatientActions } from '../../../store/ducks/patient';
import { Creators as SurgeryActions } from '../../../store/ducks/surgery';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { Container, ListSurgeryTitle, PageTitle } from './styles';
import util from '../../../utils/util';
import { FiPlus, FiMenu } from 'react-icons/fi';
import Loading from '../../../components/Loading';
import PatientCard from '../../../components/PatientCard';
import ListSurgery from '../../../components/ListSurgery';
import DetailSurgery from '../../../components/DetailSurgery';
import CreateSurgery from '../../../components/CreateSurgery';
import CreatePatient from '../../../components/CreatePatient';

const DetailPatient = ({
  getPatientRequest,
  getSurgeriesRequest,
  removeSurgeryRequest,
  match,
  patientState,
  surgeryState,
}) => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(false);
  const [patient, setPatient] = useState(null);
  const [surgery, setSurgery] = useState(null);
  const [surgeries, setSurgeries] = useState(null);
  const [editSurgery, setEditSurgery] = useState(false);
  const [openModalSurgery, setOpenModalSurgery] = useState(false);
  const [openModalPatient, setOpenModalPatient] = useState(false);

  useEffect(() => {
    const { id } = match.params;
    getPatientRequest(id);
  }, [match.params, getPatientRequest]);

  useEffect(() => {
    if (patient && patient.id) {
      setPage(page + 1);
      getSurgeriesRequest({ patient: patient.id, page: page + 1 });
    }
  }, [patient]);

  useEffect(() => {
    setPatient(patientState.patient);
  }, [patientState.patient]);

  useEffect(() => {
    setSurgeries(surgeryState.surgeries);
    if (surgeryState.surgeries && surgeryState.surgeries.length > 0) {
      setSurgery(surgeryState.surgeries[0]);
    } else {
      handleSelectedSurgery(null);
    }
  }, [surgeryState.surgeries, surgeryState.surgeries.length]);

  const handleSelectedSurgery = (surgery) => {
    setSelected(!!surgery);
    setSurgery(surgery);
  };

  const handleEditSurgery = (value) => {
    setEditSurgery(value);
    handleOpenModalSurgery(true);
  };

  const handleRemoveSurgery = (id) => {
    removeSurgeryRequest(id);
  };

  const handleOpenModalSurgery = (value) => {
    if (!value) {
      setEditSurgery(null);
    }
    setOpenModalSurgery(value);
  };

  const handleOpenModalPatient = (value) => {
    setOpenModalPatient(value);
  };

  function getSurgeries() {
    if (surgeryState.page < surgeryState.lastPage) {
      setPage(page + 1);
      getSurgeriesRequest({ patient: patientState.patient.id, page: page + 1 });
    }
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'Excluir Cirurgia',
      text: 'Tem certeza que deseja excluir essa cirurgia',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        handleRemoveSurgery(id);
      }
    });
  };

  return (
    <Container className='container-fluid pb-xl-0 px-xl-5 px-xl-4 px-md-3 p-0'>
      <PageTitle className='mx-2 mx-md-0 pb-0 pb-md-4'>
        <div class='d-flex justify-content-between align-items-center'>
          <div class='d-flex align-items-center justify-content-between col-12 mb-1 mb-md-0 px-0'>
            <h5 class='h3 font-weight-600 mb-0 '>Detalhar Paciente</h5>
            <button
              className='button pt-3 px-3 mr-1 d-xl-none side-menu text-primary'
              onClick={(e) => util.toogleSidebar(e)}
            >
              <FiMenu size='22' />
            </button>
          </div>
        </div>
      </PageTitle>
      <div className='d-flex flex-column flex-md-row' style={{ height: '90.5%' }}>
        {patient && (
          <div className='col-lg-4 col-md-6 pr-0 pr-md-3 pl-0' style={{ maxHeight: '100%' }}>
            <div className='card mx-2 mx-md-0 mt-2 mt-md-0'>
              <PatientCard
                patient={patient}
                avatar={util.getAvatars(
                  patient.gender,
                  patient.avatar ? patient.avatar : Math.floor(Math.random() * 5)
                )}
                surgeries={surgeries}
                handleEditPatient={handleOpenModalPatient}
              />
            </div>
            <div
              className={`card mt-2 mt-md-3 mx-2 mx-md-0 ${selected ? 'd-none d-md-flex' : 'd-flex'}`}
              style={{ height: '56%' }}
            >
              <ListSurgeryTitle className='pb-3'>
                <h6 className='mb-0'>Cirurgias</h6>
              </ListSurgeryTitle>
              <section className={`mt-2 py-2 align-items-center ${selected ? 'd-none d-md-flex' : 'd-flex'}`}>
                <input type='text' placeholder='Pesquisar...' className='surgery-search mr-3' />
                <button
                  className='rounded-circle p-2 my-1 btn btn-sm btn-primary'
                  onClick={(e) => handleOpenModalSurgery(true)}
                >
                  <FiPlus size={18} color='#FFF' />
                </button>
              </section>
              {surgeryState.loading && <Loading />}
              <ListSurgery
                getSurgeries={getSurgeries}
                surgeries={surgeries}
                handleSelectedSurgery={handleSelectedSurgery}
                selected={selected}
              />
            </div>
          </div>
        )}
        <div
          className={`h-100 col-lg-8 col-md-6 col-12 px-0 px-md-3 border-left d-none d-md-block ${
            !selected ? 'd-none d-md-flex' : 'd-flex'
          }`}
        >
          {surgery && (
            <div className='w-100 h-100' style={{ height: '97%' }}>
              <CSSTransition
                in={true}
                mountOnEnter={true}
                unmountOnExit={true}
                appear={true}
                timeout={1000}
                classNames='my-node'
              >
                <DetailSurgery
                  surgery={surgery}
                  confirmDelete={confirmDelete}
                  handleEditSurgery={handleEditSurgery}
                  selected={selected}
                  handleSelectedSurgery={handleSelectedSurgery}
                />
              </CSSTransition>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={openModalSurgery}
        onRequestClose={(e) => handleOpenModalSurgery(false)}
        contentLabel='Surgery Modal'
        className='modal-component'
        overlayClassName='overlay'
      >
        <CSSTransition
          in={openModalSurgery}
          mountOnEnter={true}
          unmountOnExit={true}
          appear={true}
          timeout={1000}
          classNames='my-node'
        >
          <CreateSurgery patient={patient} surgery={editSurgery} closeModal={handleOpenModalSurgery} />
        </CSSTransition>
      </Modal>
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
          <CreatePatient patient={patient} closeModal={handleOpenModalPatient} />
        </CSSTransition>
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  patientState: state.patient,
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...PatientActions, ...SurgeryActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailPatient);
