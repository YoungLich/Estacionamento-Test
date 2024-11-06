import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { db } from '../../../service/firebaseConfig';
import { ProfilePicture, Title } from './styled';

export const SideImg = ({ active }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [userData, setUserData] = React.useState(null);

  // Hook para buscar os dados do usuário
  React.useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userEmail = user.email;
        const q = query(collection(db, 'Usuarios'), where("email", "==", userEmail));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const doc = snapshot.docs[0]; // Pega apenas o primeiro documento, se existir
          setUserData({ id: doc.id, ...doc.data() });
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <>
      <ProfilePicture active={active}>
        {userData?.photoURL ? (
          <img src={userData.photoURL} alt="Foto de perfil" />
        ) : (
          <FaUserCircle size={90} style={{ color: '#fff', margin: '1px 1px 1px 1px' }} />
        )}
      </ProfilePicture>
      {userData && <Title>{userData.nome}</Title>}
    </>





  );
};
