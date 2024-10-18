import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../service/firebaseConfig";
import { Form, ProfilePicture, Title } from './styled';

export const Editar = () => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const [newCpf, setNewCpf] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPlaca, setNewPlaca] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

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
            setNewName(userData.nome);
            setNewEmail(userData.email);
            setNewTelefone(userData.telefone);
            setNewCpf(userData.cpf);
            setNewPlaca(userData.placa);
            setNewPassword(userData.password);

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

  const deleteUser = async () => {
    if (user) {
      await deleteDoc(doc(db, "Usuarios", user.id));
      navigate("/");
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const userRef = doc(db, "Usuarios", user.id);
      await updateDoc(userRef, {
        nome: newName,
        email: newEmail,
        telefone: newTelefone,
        cpf: newCpf,
        placa: newPlaca,
        password: newPassword
      });
      navigate("/perfil");
    }
  };

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

  const handleEditClick = () => {
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

  const handleDeleteClick = async () => {
    if (user.photoURL) {
      const photoRef = ref(storage, user.photoURL);
      await deleteObject(photoRef);
      const userDocRef = doc(db, 'Usuarios', user.id);
      await updateDoc(userDocRef, { photoURL: null });
      setUser((prev) => ({ ...prev, photoURL: null }));
    }
  };

  return (
    <>

      <Title>Editar Usuário</Title>
      <ProfilePicture>
        {user.photoURL ? (
          <>
            <img src={user.photoURL} alt="Foto de perfil" className="profile-picture" />
            <FaTrash className="delete-icon" color="red" size={40} onClick={handleDeleteClick} />
          </>
        ) : (
          <FaUserCircle size={165} style={{ color: 'black', margin: '2 1 2 2' }} />
        )}
        <FaEdit className="edit-icon" color="red" size={40} onClick={handleEditClick} />
      </ProfilePicture>

      <Form onSubmit={handleUpdateUser}>
        <label>
          Nome:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Digite seu novo nome"
          />
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Digite seu novo e-mail"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Digite sua nova placa"
          />
        </label>
        <label>
          Telefone:
          <input
            type="text"
            value={newTelefone}
            onChange={(e) => setNewTelefone(e.target.value)}
            placeholder="Digite seu novo telefone"
          />
        </label>
        <label>
          C.P.F:
          <input
            type="text"
            value={newCpf}
            onChange={(e) => setNewCpf(e.target.value)}
            placeholder="Digite seu novo CPF"
          />
        </label>
        <label>
          Placa:
          <input
            type="text"
            value={newPlaca}
            onChange={(e) => setNewPlaca(e.target.value)}
            placeholder="Digite sua nova placa"
          />
        </label>
        <button type="submit" disabled={loading} className='clear'>
          {loading ? 'Carregando...' : 'Salvar'}
        </button>
        <button type="button" disabled={loading} onClick={deleteUser}>
          {loading ? 'Carregando...' : 'Deletar'}
        </button>
      </Form>


    </>
  );
};
