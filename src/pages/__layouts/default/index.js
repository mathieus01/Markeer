import React from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Container, Content } from './styles';

function DefaultLayout({ children, ...rest }) {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        {children}
      </Content>
    </Container>
  );
}

export default DefaultLayout;
