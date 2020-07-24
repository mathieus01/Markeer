import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swal from 'sweetalert2';
import ListGroupComponent from '../../../components/ListGroupComponent';
import DetailGroupComponent from '../../../components/DetailGroupComponent';
import { Creators as GroupActions } from '../../../store/ducks/group';
import { Container } from './styles';

function ListGroups({ getGroupsByUserRequest, groupState, deleteGroupRequest }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    getGroupsByUserRequest(page);
  }, [getGroupsByUserRequest, page]);

  useEffect(() => {
    const { groups } = groupState;
    setGroups(groups);
    if (groups && groups.length > 0) setSelectedGroup(groups[0]);
  }, [groupState, groupState.groups]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteGroup = (id) => {
    deleteGroupRequest(id);
  };

  const getGroups = () => {
    if (groupState.page < groupState.lastPage) {
      setPage(page + 1);
      getGroupsByUserRequest(page + 1);
    }
  };

  function confirmDelete(id) {
    Swal.fire({
      title: 'Excluir Grupo',
      text: 'Tem certeza que deseja excluir esse grupo ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sim',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        deleteGroup(id);
      }
    });
  }

  return (
    <Container className='container-fluid pt-xl-4 px-xl-5 pt-lg-3 px-lg-4 px-3 pt-3 pb-0'>
      {/*
      ============================================================================================= 
                                              FILTRO
      =============================================================================================
        */}

      <div className='row'>
        <div className='col-lg-4 col-md-5 pr-md-0'>
          <ListGroupComponent groups={groups} />
        </div>
        <div className='col-lg-8 col-md-7 pl-xl-4 pl-md-2 d-none d-md-block'>
          {selectedGroup && <DetailGroupComponent selectedGroup={selectedGroup} confirmDelete={confirmDelete} />}
        </div>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  groupState: state.group,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(GroupActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListGroups);
