import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Sidebar } from '../Sidebar';
import { Container } from './styled';

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);


  const handleMouseEnter = () => {
    setSidebar(true);
  };


  const handleMouseLeave = () => {
    setSidebar(false);
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FaBars />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};
