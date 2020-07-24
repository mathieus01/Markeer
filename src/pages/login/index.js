import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import InputComponent from '../../components/InputComponent';
import LoginImg from '../../assets/images/login.jpg';
import { Container } from './styles';

function Login({ signInRequest }) {
  const formRef = useRef(null);

  function handleSubmit(data) {
    signInRequest(data.email, data.password);
  }

  return (
    <Container className='container-fluid d-flex h-100 px-0'>
      <div className='col-md-6 col-lg-8 px-0 d-none d-md-flex'>
        <img
          src={LoginImg}
          alt='login'
          className='img-fluid'
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>
      <CSSTransition
        in={true}
        mountOnEnter={true}
        unmountOnExit={true}
        appear={true}
        timeout={1000}
        classNames='my-node'
      >
        <div className='col-12 col-md-6 col-lg-4 px-0'>
          <div className='card w-100 h-100'>
            <h1>Markeer</h1>
            <Form onSubmit={handleSubmit} ref={formRef} className='my-lg-auto mx-0 mx-xl-5'>
              <h4 className='my-4'>Entre em sua conta</h4>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Email</label>
                <InputComponent type='text' name='email' />
              </div>
              <div class='form-group'>
                <label for='exampleInputPassword1'>Senha</label>
                <InputComponent type='password' name='password' />
              </div>
              <div className='form-group d-flex flex-column justify-content-between mt-2'>
                <button type='submit' class='btn  primary-button w-100'>
                  Entrar
                </button>
                <Link to='/signup' className='w-100 mt-2 d-flex justify-content-center p-2'>
                  <span>Criar uma conta</span>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </CSSTransition>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
