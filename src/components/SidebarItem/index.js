import React from 'react';
import { Container } from './styled';

export const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container >
      <Icon />
      {Text}
    </Container>
  );
}

