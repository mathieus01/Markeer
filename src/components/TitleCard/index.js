import React from 'react';

import { Title } from './styles';

function TitleCard({ className, children }) {
  return <Title className={className}>{children}</Title>;
}

export default TitleCard;
