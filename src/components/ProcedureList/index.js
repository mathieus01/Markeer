import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FiMinusCircle } from 'react-icons/fi';
import { ProceduresList } from './styles';

function ProcedureList({ procedures, isEdit, removeProcedure }) {
  return (
    <ProceduresList className='my-0 '>
      <TransitionGroup className='todo-list w-100'>
        {procedures &&
          procedures.map((procedure) => (
            <CSSTransition
              key={procedure.code}
              timeout={500}
              classNames='item'
              mountOnEnter={true}
              unmountOnExit={true}
              appear={true}
            >
              <li className={`d-flex px-0 ${!isEdit ? 'my-2' : ''}`}>
                <small className='d-flex align-items-center mr-2'>{procedure.code}</small>
                <strong className='d-flex align-items-center w-100'>{procedure.name}</strong>
                {isEdit && (
                  <button
                    type='button'
                    className='button rounded-circle p-1 d-flex align-items-center'
                    onClick={(e) => removeProcedure(procedure)}
                  >
                    <FiMinusCircle size={18} color='#DC3544' />
                  </button>
                )}
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ProceduresList>
  );
}

export default ProcedureList;
