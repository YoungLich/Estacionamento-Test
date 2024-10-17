import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../service/firebaseConfig";

export const Editar = () => {
  const [user, setUser] = useState(null);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const deleteUser = async () => {
    if (user) {
      await deleteDoc(doc(db, "Usuarios", user.id));

    }
  };

  const handleUpdateName = async () => {
    if (user) {
      const userRef = doc(db, "Usuarios", user.id);
      await updateDoc(userRef, { nome: newName, email: newEmail });
      setUser({ ...user, nome: newName, email: newEmail });
    }
  };


  return (
    <div>
      <h2>Editar Usuário</h2>
      <form>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Digite seu novo nome"
        />
        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Digite seu novo e-mail"
        />
        <button onClick={handleUpdateName}>Salvar</button>

        <button onClick={deleteUser}>Excluir</button>
      </form>

    </div>
  );
};
