import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { db } from "../../service/firebaseConfig";

export const Foto = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const storage = getStorage();
  const auth = getAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userRef = doc(db, "Usuarios", currentUser.uid); // Supondo que o ID do usuário é o uid do Firebase Auth
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setUser({ id: userDoc.id, ...userDoc.data() });
        } else {
          console.log("Nenhum documento encontrado para este usuário.");
        }
      } else {
        console.log("Nenhum usuário autenticado.");
      }
    };

    fetchUserData();
  }, [auth]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (image && user) {
      const storageRef = ref(storage, `profile_pictures/${user.id}`); // Referência para o arquivo no Storage

      try {
        await uploadBytes(storageRef, image); // Faz o upload da imagem
        console.log("Upload realizado com sucesso!");

        const downloadURL = await getDownloadURL(storageRef); // Obtém a URL da imagem
        console.log("URL da imagem:", downloadURL);

        // Atualiza o Firestore com a nova URL da imagem
        const userRef = doc(db, "Usuarios", user.id);
        await updateDoc(userRef, { photoURL: downloadURL });
        console.log("Firestore atualizado com sucesso!");

        // Atualiza o estado local
        setUser((prevUser) => ({ ...prevUser, photoURL: downloadURL }));
        setImage(null); // Limpa a imagem selecionada
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error); // Log de erro
      }
    } else {
      console.error("Imagem ou usuário não encontrados."); // Log de erro
    }
  };

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <div>
        <h2>Meu Perfil</h2>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Foto de perfil"
            style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
          />
        ) : (
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', marginBottom: '10px' }} />
        )}
        <p>
          <span>Nome:</span> {user.nome}
        </p>
        <p>
          <strong>E-mail:</strong> {user.email}
        </p>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button onClick={handleUpload}>Adicionar</button>
      </div>
    </>
  );
};
