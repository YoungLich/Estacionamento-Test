import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../../img/reservedpar4.png";
import { auth, db } from '../../service/firebaseConfig';

import { Container, Form, Imge, ToggleContainer, ToggleRight, Togglepanel } from "./styled";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;



      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('Dados do usuário:', userData);
        setSuccess(`Login bem-sucedido! Dados do usuário: ${JSON.stringify(userData)}`);

      } else {
        setError('.');
      }
    } catch (err) {
      console.error('Erro durante o login:', err);
      setError('Falha ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }


    navigate('/PaginaInicial');
  };

  return (
    <Container className="form-container">
      <Form onSubmit={handleLogin} className="sign-in">
        <h1>Login</h1>
        <span>Use seu email e senha para entrar:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <Link to="#">Esqueceu sua senha?</Link>
        <button type="submit" disabled={loading} className='clear'>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </Form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <ToggleContainer>
        <Togglepanel>
          <ToggleRight>
            <Imge src={image} className="imge" alt="" />
          </ToggleRight>
        </Togglepanel>
      </ToggleContainer>
    </Container>
  );
};
