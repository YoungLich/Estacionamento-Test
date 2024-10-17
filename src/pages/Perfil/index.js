import { getAuth } from "firebase/auth";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { db, storage } from "../../service/firebaseConfig";
import "./index.css";

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

  const handleImageUpload = async (file) => {
    if (file && user) {
      const storageRef = ref(storage, `profilePictures/${user.id}/${file.name}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);
      const userDocRef = doc(db, 'Usuarios', user.id);
      await updateDoc(userDocRef, { photoURL });
      setUser((prev) => ({ ...prev, photoURL }));
    }
  };

  const handleEditClick = (e) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        handleImageUpload(selectedFile);
      }
    };
    fileInput.click();
  };

  if (!user) {
    return <div>Nenhum usuário encontrado. Por favor, faça login.</div>;
  }

  return (
    <>
      <Header />
      <div >
        <h1 className="subtitle">Meu Perfil</h1>

        <div className="image-container">
          {user.photoURL ? (
            <img src={user.photoURL} alt="Foto de perfil" />
          ) : (
            <div />
          )}
          <FaEdit className="edit-icon" color="red" size={40} onClick={handleEditClick} />
        </div>

        <span><strong>Nome:</strong> {user.nome}
          <Link to={`/perfil/editar/${user.id}`}>
            <FaEdit color="red" size={20} />
          </Link>
        </span >

        <span> E-mail: {user.email}</span>
      </div >
    </>
  );
};

export default Perfil;
