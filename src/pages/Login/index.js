import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../img/reservedpar4.png';
import { auth, db } from '../../service/firebaseConfig';
// import './index.css';
import { Container } from './styled.js';

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
        setError('');

      }
    } catch (err) {
      console.error('Erro durante o login:', err);

    }
    navigate('/dashboard');;
  };

  return (
    <Container className='container'>

      <img src={images} alt="" srcset="" />



      <form onSubmit={handleLogin} className='form-container sign-in' >


        <h2>Login</h2>

        <span>Use seu E-mail e senha para fazer o Login:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail'
          required
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <Link to="#" className='password'>Esqueceu sua senha?</Link>
        <button type="submit" disabled={loading} className='clear'>
          {loading ? 'Carregando...' : 'Login'}
        </button>

      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <div className="toggle-container">
        <div className="toggle">


        </div>
      </div>

    </Container>


  );
};
