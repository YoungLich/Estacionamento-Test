import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { db } from "../../service/firebaseConfig";

import { Container, ProfilePicture, Title } from "./styled";

const Perfil = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userEmail = currentUser.email;
        const q = query(collection(db, 'Usuarios'), where("email", "==", userEmail));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          snapshot.forEach((doc) => {
            const userData = { id: doc.id, ...doc.data() };
            setUser(userData);
          });
        } else {
          console.log("Nenhum documento encontrado para este usuário.");
          setUser(null);
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        setUser(null);
      }
    };

    fetchUserData();
  }, [auth]);


  if (!user) {
    return <div>Nenhum usuário encontrado. Por favor, faça login.</div>;
  }

  return (
    <>
      <Header />

      <Title>Meu Perfil</Title>

      <ProfilePicture>
        {user.photoURL ? (
          <img src={user.photoURL} alt="Foto de perfil" className="profile-picture" />
        ) : (
          <FaUserCircle size={165} style={{ color: 'black', margin: '2 1 2 2' }} />
        )}
      </ProfilePicture>

      <Container>
        <span><strong>Nome:</strong> {user.nome}</span><br />
        <span><strong>E-mail:</strong> {user.email}</span><br />
        <span><strong>C.P.F:</strong> {user.cpf}</span><br />
        <span><strong>Telefone:</strong> {user.telefone}</span><br />
        <span><strong>Placa:</strong> {user.placa}</span><br />
      </Container>
      <button type="submit"><Link to={`/editar/${user.id}`}>
        Editar Pefil
      </Link></button>
    </>
  );
};

export default Perfil;
