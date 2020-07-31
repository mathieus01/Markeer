import React from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <div className='spinner-grow' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </Container>
  );
}

export default Loading;
