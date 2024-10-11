import React from 'react';
import {
  FaCar,
  FaChartBar,
  FaHome,
  FaPowerOff,
  FaRegSun,
  FaTimes,
  FaUserAlt
} from 'react-icons/fa';
import { Container, Content } from './styled';

import { SidebarItem } from '../SidebarItem';

export const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false);
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Dashboard" />
        <SidebarItem Icon={FaChartBar} Text="Relatórios" />
        <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        <SidebarItem Icon={FaCar} Text="Vagas" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
        <SidebarItem Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  );
}

