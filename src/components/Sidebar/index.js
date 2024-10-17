import React from 'react';
import {
  FaCar,
  FaChartBar,
  FaHome,
  FaPowerOff,
  FaRegSun,
  FaTimes,
  FaUserAlt,
  FaUserCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { auth } from '../../service/firebaseConfig';
import { SidebarItem } from '../SidebarItem';
import { Container, Content, ProfilePicture } from './styled';

export const Sidebar = ({ active }) => {
  const user = auth.currentUser;

  const closeSidebar = () => {
    active(false);
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        {user && (
          <ProfilePicture>
            <FaUserCircle size={90} style={{ color: '#fff', margin: '2 3 3 2' }} />
            <span>{user.nome}</span>
          </ProfilePicture>
        )}



        <Link to="/dashboard" style={{ textDecoration: 'none' }} >
          <SidebarItem Icon={FaHome} Text="Dashboard" />
        </Link>
        <SidebarItem Icon={FaChartBar} Text="Relatórios" />

        <Link to="/perfil" style={{ textDecoration: 'none' }} >
          <SidebarItem Icon={FaUserAlt} Text="Perfil" />
        </Link>



        <SidebarItem Icon={FaCar} Text="Vagas" />
        <SidebarItem Icon={FaRegSun} Text="Configuração" />
        <SidebarItem Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  );
}

