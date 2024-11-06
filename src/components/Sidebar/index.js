// Sidebar.js
import React from 'react';
import { FaCar, FaChartBar, FaHome, FaPowerOff, FaRegSun, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SidebarItem } from '../SidebarItem';
import { SideImg } from '../SidebarItem/img';
import { Container, Content } from './styled';

export const Sidebar = () => {
  return (
    <Container>
      <Content>
        <SideImg />

        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaHome} Text="Dashboard" />
        </Link>

        <SidebarItem Icon={FaChartBar} Text="Relatórios" />

        <Link to="/perfil" style={{ textDecoration: 'none' }}>
          <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        </Link>

        <SidebarItem Icon={FaCar} Text="Vagas" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
        <SidebarItem Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  );
};
