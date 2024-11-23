import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { db } from "../../service/firebaseConfig";
import "./perfil.css";


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



      <h2 className="title2">Foto Perfil</h2>


      <div className="container-edit">
        <h1>Meu Perfil</h1>
        <div className="profile-picture1">
          {user.photoURL ? (
            <img src={user.photoURL} alt="Foto de perfil" className="image1" />
          ) : (
            <FaUserCircle size={165} style={{ color: 'black', margin: '2 1 2 2' }} />
          )}
          <h2>Foto do Perfil</h2>
        </div>


        <span className="span1"><strong className="span2">Nome:</strong> <p className="p1">{user.nome}</p></span><br />
        <span className="span1"><strong className="span2">E-mail:</strong> <p className="p1">{user.email}</p></span><br />
        <span className="span1"><strong className="span2">CNPJ:</strong> <p className="p1">{user.cnpj}</p></span><br />
        <span className="span1"><strong className="span2">Telefone:</strong> <p className="p1">{user.telefone}</p></span><br />
        <span className="span1"><strong className="span2">CEP:</strong> <p className="p1">{user.cep}</p></span><br />
        <span className="span1"><strong className="span2">Rua:</strong> <p className="p1">{user.rua}</p></span><br />
        <span className="span1"><strong className="span2">Bairro:</strong> <p className="p1">{user.bairro}</p></span><br />
        <span className="span1"><strong className="span2">Numero:</strong> <p className="p1">{user.numero}</p></span><br />
        <span className="span1"><strong className="span2">Cidade:</strong> <p className="p1">{user.cidade}</p></span><br />
        <span className="span1"><strong className="span2">Estado:</strong> <p className="p1">{user.estado}</p></span><br />
        <button className="btn10" type="submit">
          <Link to={`/editar/${user.id}`} style={{ textDecoration: 'none', color: "white" }}>
            Editar Pefil
          </Link></button>
      </div>

    </>
  );
};

export default Perfil;
