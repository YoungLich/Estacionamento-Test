import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"; // Correção aqui
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"; // Correção aqui
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { db, storage } from "../../service/firebaseConfig"; // Certifique-se que 'db' e 'storage' estão exportados corretamente de firebaseConfig
import './edit.css';

export const Editar = () => {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newTelefone, setNewTelefone] = useState("");
  const [newCnpj, setNewCnpj] = useState("");
  const [newRua, setNewRua] = useState("");
  const [newBairro, setNewBairro] = useState("");
  const [newNumero, setNewNumero] = useState("");
  const [newCep, setNewCep] = useState("");
  const [newCidade, setNewCidade] = useState("");
  const [newEstado, setNewEstado] = useState("");
  const [loading, setLoading] = useState(true);  // Estado de carregamento

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica o estado de autenticação assim que o componente for carregado
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
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
            setNewPassword(userData.password);
            setNewCnpj(userData.cnpj);
            setNewCep(userData.cep);
            setNewRua(userData.rua);
            setNewBairro(userData.bairro);
            setNewNumero(userData.numero);
            setNewCidade(userData.cidade);
            setNewEstado(userData.estado);
          });
        } else {
          console.log("Nenhum documento encontrado para este usuário.");
          setUser(null);
        }
      } else {
        console.log("Nenhum usuário autenticado.");
        setUser(null);
      }
      setLoading(false);  // A autenticação foi verificada
    });

    return () => unsubscribe();
  }, [auth]);  // O useEffect será disparado sempre que o auth mudar

  if (loading) {
    return <div>Carregando...</div>;  // Exibe "Carregando..." até verificar o estado da autenticação
  }

  if (!user) {
    return <div>Nenhum usuário encontrado. Por favor, faça login.</div>;
  }

  const deleteUser = async () => {
    if (user) {
      await deleteDoc(doc(db, "Usuarios", user.id)); // 'doc' foi corrigido
      navigate("/");  // Redireciona para a página inicial após excluir
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      const userRef = doc(db, "Usuarios", user.id); // 'doc' foi corrigido
      await updateDoc(userRef, { // 'updateDoc' foi corrigido
        nome: newName,
        email: newEmail,
        telefone: newTelefone,
        cnpj: newCnpj,
        password: newPassword,
        cep: newCep,
        rua: newRua,
        numero: newNumero,
        bairro: newBairro,
        cidade: newCidade,
        estado: newEstado
      });
      setLoading(false);
      navigate("/perfil");  // Redireciona para a página de perfil após atualizar
    }
  };

  const handleImageUpload = async (file) => {
    if (file && user) {
      const storageRef = ref(storage, `profilePictures/${user.id}/${file.name}`); // 'ref' e 'storage' foram corrigidos
      await uploadBytes(storageRef, file); // 'uploadBytes' foi corrigido
      const photoURL = await getDownloadURL(storageRef); // 'getDownloadURL' foi corrigido
      const userDocRef = doc(db, 'Usuarios', user.id); // 'doc' foi corrigido
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
      const photoRef = ref(storage, user.photoURL); // 'ref' e 'storage' foram corrigidos
      await deleteObject(photoRef); // 'deleteObject' foi corrigido
      const userDocRef = doc(db, 'Usuarios', user.id); // 'doc' foi corrigido
      await updateDoc(userDocRef, { photoURL: null });
      setUser((prev) => ({ ...prev, photoURL: null }));
    }
  };

  return (
    <>
      <Header />
      <div className="edit">
        <h1>Editar Usuário</h1>
        <div className="img2">
          {user.photoURL ? (
            <>
              <img src={user.photoURL} alt="Foto de perfil" className="image3" />
              <FaTrash className="delete-icon" onClick={handleDeleteClick} />
            </>
          ) : (
            <FaUserCircle size={165} style={{ color: 'black', margin: '2 10 2 2' }} />
          )}
          <FaEdit className="edit-icon" onClick={handleEditClick} />
        </div>

        <form className="form1" onSubmit={handleUpdateUser}>
          <label className="label1">
            Nome:
            <input
              className="input1"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Digite seu novo nome"
            />
          </label>
          <label className="label1">
            E-mail:
            <input
              className="input1"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Digite seu novo e-mail"
            />
          </label>
          <label className="label1">
            Senha:
            <input
              className="input1"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Digite sua nova senha"
            />
          </label>
          <label className="label1">
            Telefone:
            <input
              className="input1"
              type="text"
              value={newTelefone}
              onChange={(e) => setNewTelefone(e.target.value)}
              placeholder="Digite seu novo telefone"
            />
          </label>
          <label className="label1">
            CNPJ:
            <input
              className="input1"
              type="text"
              value={newCnpj}
              onChange={(e) => setNewCnpj(e.target.value)}
              placeholder="Digite seu novo CNPJ"
            />
          </label>
          <label className="label1">
            CEP:
            <input
              className="input1"
              type="number"
              value={newCep}
              onChange={(e) => setNewCep(e.target.value)}
              placeholder="Digite seu novo Cep"
            />
          </label>
          <label className="label1">
            Rua:
            <input
              className="input1"
              type="text"
              value={newRua}
              onChange={(e) => setNewRua(e.target.value)}
              placeholder="Digite nome da rua"
            />
          </label>
          <label className="label1">
            Bairro:
            <input
              className="input1"
              type="text"
              value={newBairro}
              onChange={(e) => setNewBairro(e.target.value)}
              placeholder="Digite nome do Bairro"
            />
          </label>
          <label className="label1">
            Numero:
            <input
              className="input1"
              type="number"
              value={newNumero}
              onChange={(e) => setNewNumero(e.target.value)}
              placeholder="Digite numero "
            />
          </label>
          <label className="label1">
            Cidade:
            <input
              className="input1"
              type="text"
              value={newCidade}
              onChange={(e) => setNewCidade(e.target.value)}
              placeholder="Digite cidade"
            />
          </label>
          <label className="label1">
            Estado:
            <input
              className="input1"
              type="text"
              value={newEstado}
              onChange={(e) => setNewEstado(e.target.value)}
              placeholder="Digite estado"
            />
          </label>
          <div>
            <button className="btn12" type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Salvar'}
            </button>
            <button className="btn12" type="button" disabled={loading} onClick={deleteUser}>
              {loading ? 'Carregando...' : 'Deletar'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
