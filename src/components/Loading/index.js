import React from 'react';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <div class='spinner-grow' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    </Container>
  );
}

export default Loading;
