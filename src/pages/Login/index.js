import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from "../../img/Reserverd.png";
import Telegrma from "../../img/Telegram.png";
import Wpp from "../../img/Wpp.png";
import { auth, db } from '../../service/firebaseConfig';
import "./login.css";
import "./responsivelogin.css";



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
        navigate('/dashboard');
      } else {
        // Cria um novo documento para o usuário no Firestore caso não exista
        await setDoc(userDocRef, {
          email: user.email,
          // Adicione aqui outros dados padrão para o novo usuário
        });
        setSuccess('Usuário criado no Firestore com sucesso!');
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Erro durante o login:', err);
      if (err.code === 'auth/user-not-found') {
        setError('Usuário não encontrado.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Senha incorreta.');
      } else {
        setError('Falha ao fazer login. Verifique suas credenciais.');
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <div className="login-container">
        <img src={Image} alt="foto" className="img2" />
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <button className="btn1" type="submit" id="loginButton">
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
      </div>

      <div className="contato">
        <h1>Criar Conta</h1>
        <Link to="https://wa.link/mssk2f">
          <img src={Wpp} alt="foto do WhatsApp" className="img1" />
        </Link>

        <img src={Telegrma} alt="foto do Telegram" className="img1" />
        <p className="text">Entre em contato conosco</p>
      </div>
    </>
  );
};