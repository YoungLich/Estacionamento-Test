// SidebarItem.js
import React from 'react';
import { Container, IconWrapper, Name } from './styled';

export const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Name>{Text}</Name>
    </Container>
  );
};
