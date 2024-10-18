import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
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
import { db } from '../../service/firebaseConfig';
import { SidebarItem } from '../SidebarItem';
import { Container, Content, ProfilePicture, Title } from './styled';

export const Sidebar = ({ active }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userEmail = user.email;
        const q = query(collection(db, 'Usuarios'), where("email", "==", userEmail));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            setUserData({ id: doc.id, ...doc.data() });
          });
        }
      }
    };

    fetchUserData();
  }, [user]);

  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <ProfilePicture>
          {userData?.photoURL ? (
            <img src={userData.photoURL} alt="Foto de perfil" />
          ) : (
            <FaUserCircle size={90} style={{ color: '#fff', margin: '2px 3px 3px 2px' }} />
          )}
        </ProfilePicture>

        {userData && <Title >{userData.nome}</Title>}

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
