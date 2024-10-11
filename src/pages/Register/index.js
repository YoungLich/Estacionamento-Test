import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../../service/firebaseConfig';

export const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [placa, setPlaca] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);


      await addDoc(collection(db, 'Usuarios'), {
        nome: nome,
        email: email,
        password: password,
        telefone: telefone,
        placa: placa,
        cpf: cpf,
        createdAt: new Date(),
      });

      setSuccess(`Usuário ${nome} criado com sucesso!`);
      setNome('');
      setEmail('');
      setPassword('');
      setTelefone('');
      setPlaca('');
      setCpf('');
    } catch (e) {
      setError('Erro ao criar usuário: ' + e.message);
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Telefone:
          <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </label>
        <label>
          CPF:
          <input type="number" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </label>
        <label>
          Placa:
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} required />
        </label>
        <button type="submit">Criar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};
