import React from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Container, Content } from './styles';

function DefaultLayout({ children, props, ...rest }) {
  return (
    <Container>
      <Content>
        <Sidebar props={props} />
        {children}
      </Content>
    </Container>
  );
}

export default DefaultLayout;
