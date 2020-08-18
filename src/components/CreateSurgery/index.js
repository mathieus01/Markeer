import React, { useState, useRef, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as SurgeryActions } from '../../store/ducks/surgery';
import { Form } from '@unform/web';
import Util from '../../utils/util';
import moment from 'moment';
import InputComponent from '../InputComponent';
import SelectProcedure from '../SelectProcedure';
import ProcedureList from '../ProcedureList';
import Select from '../Select';
import * as Yup from 'yup';
import { Container, Title, Body, ButtonGroup } from './styles';

function CreateSurgery({ surgery, patient, closeModal, saveSurgeryRequest, updateSurgeryRequest }) {
  const formRef = useRef(null);
  const [procedures, setProcedures] = useState([]);
  const [surgeriesTypes, setSurgeriesTypes] = useState([]);

  useEffect(() => {
    setSurgeriesTypes(Util.surgeryTypes());
  }, []);

  useEffect(() => {
    if (surgery && surgery.id) {
      setTimeout(() => {
        formRef.current.setData({
          ...surgery,
          date: moment(surgery.date).format('YYYY-MM-DD'),
        });
        if (surgery.procedures && surgery.procedures.length > 0) {
          setProcedures([...surgery.procedures]);
        }
      }, 50);
    }
  }, [formRef, surgery]);

  function handleProcedures() {
    const newArray = procedures.map((procedure) => procedure.id);
    return newArray;
  }

  function removeProcedures(procedure) {
    const newArray = procedures.filter((p) => p.id !== procedure.id);
    setProcedures(newArray);
  }

  async function handleValidationSubmit(data) {
    let validacao = true;
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        type: Yup.string().required('Selecione o tipo da cirurgia'),
        cause: Yup.string().required('Informe a causa da cirurgia'),
        date: Yup.date('Informe um valor de data valido').required('Informe a data da cirurgia'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        validacao = false;
      }
    }
    return validacao;
  }

  async function handleSubmit(data) {
    if (!(await handleValidationSubmit(data))) {
      return;
    }

    const newSurgery = {
      ...data,
      date: Util.stringToDateAmerican(data.date),
      patient_id: patient.id,
      procedures: handleProcedures(),
    };

    try {
      if (surgery && surgery.id) {
        await updateSurgeryRequest({ ...newSurgery, id: surgery.id });
      } else {
        await saveSurgeryRequest(newSurgery);
      }
      closeModal(false);
    } catch (err) {
      console.log('erro submit createSurgery', err);
    }
  }

  return (
    <Container className='card'>
      <Title className='pb-3'>
        <h6 className='mb-0'>Nova Cirurgia</h6>
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit} className='h-100'>
        <Body className='mt-2'>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Carater da Cirurgia</label>
            <Select options={surgeriesTypes} name='type' />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Causa</label>
            <InputComponent type='text' name='cause' />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Local</label>
            <InputComponent type='text' name='location' />
          </div>
          <div class='form-group'>
            <label for='exampleInputPassword1'>Data de cirurgia</label>
            <InputComponent
              type='date'
              pattern='(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})'
              name='date'
            />
          </div>
          <div className='form-group'>
            <ProcedureList procedures={procedures} isEdit removeProcedure={removeProcedures} />
          </div>
          <div className='form-group'>
            <SelectProcedure procedures={procedures} setProcedures={setProcedures} />
          </div>
        </Body>
        <ButtonGroup className='form-group d-flex justify-content-between pt-2 pt-md-3 m-0'>
          <button type='submit' class='btn btn-sm primary-button rounded-pill px-3'>
            Salvar
          </button>
          <button type='button' class='btn btn-sm btn-danger rounded-pill ' onClick={(e) => closeModal(false)}>
            Cancelar
          </button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  surgeryState: state.surgery,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(SurgeryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateSurgery);
