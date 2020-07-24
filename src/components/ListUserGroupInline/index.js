import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { ListSurgeries, SurgeryItem } from './styles';

function ListUserGroupInline() {
  return (
    <ListSurgeries>
      <SurgeryItem className='py-4 d-flex align-items-center'>
        <div className='col-10 d-flex flex-column pl-0'>
          <strong className='surgery-type pl-3'>Matheus Nunes</strong>
          <div className='d-flex w-lg-50 w-lg-75 pt-2 pl-3'>
            <p className='mr-3'>mathieusnunes@gmail.com</p>
            <span>05, Jul 1995</span>
          </div>
        </div>
        <div className='col-2 px-0 d-flex justify-content-end'>
          <button className='button button px-2 mr-2'>
            <FiMoreVertical size='20' />
          </button>
        </div>
      </SurgeryItem>
    </ListSurgeries>
  );
}

export default ListUserGroupInline;
