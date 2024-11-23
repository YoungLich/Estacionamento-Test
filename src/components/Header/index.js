import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from 'react';
import { FaCar, FaChartBar, FaHome, FaMoneyBillAlt, FaPowerOff, FaRegSun, FaUserCheck, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../service/firebaseConfig';
import './header.css';

export const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [userData, setUserData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userEmail = user.email;
        const q = query(collection(db, 'Usuarios'), where("email", "==", userEmail));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          setUserData({ id: doc.id, ...doc.data() });
        }
      }
    };

    fetchUserData();
  }, [user]);

  const mostrarAlerta = () => setShowAlert(true);
  const confirmado = async () => {
    try {
      await signOut(auth);
      setShowAlert(false);
      navigate('/');
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert('Erro ao tentar sair. Tente novamente!');
    }
  };

  const cancelado = () => setShowAlert(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <body>
        <div className="navigation">
          <div className="sidebar"></div>
          <div className="user-profile">
            {userData?.photoURL ? (
              <img src={userData?.photoURL} alt="Foto do usuário" />
            ) : (
              <FaUserCircle size={50} />
            )}
            <h4>{userData?.nome || ''}</h4>
          </div>
          <ul className="lista">
            <li className={`list ${isActive('/dashboard')}`}>
              <Link to="/dashboard">
                <span className="icon">
                  <FaHome size={25} />
                </span>
                <span className="title">Dashboard</span>
              </Link>
            </li>

            <li className={`list ${isActive('/vagas')}`}>
              <Link to="/vagas">
                <span className="icon">
                  <FaCar size={25} />
                </span>
                <span className="title">Vagas</span>
              </Link>
            </li>

            <li className={`list ${isActive('/reservas')}`}>
              <Link to="/reservas">
                <span className="icon">
                  <FaUserCheck size={25} />
                </span>
                <span className="title">Reservas</span>
              </Link>
            </li>

            <li className={`list ${isActive('/pagamento')}`}>
              <Link to="/pagamento">
                <span className="icon">
                  <FaMoneyBillAlt size={25} />
                </span>
                <span className="title">Pagamentos</span>
              </Link>
            </li>

            <li className={`list ${isActive('/relatorio')}`}>
              <Link to="/relatorio">
                <span className="icon">
                  <FaChartBar size={25} />
                </span>
                <span className="title">Relatórios</span>
              </Link>
            </li>

            <li className={`list ${isActive('/perfil')}`}>
              <Link to="/perfil">
                <span className="icon">
                  <FaRegSun size={25} />
                </span>
                <span className="title">Configurações</span>
              </Link>
            </li>

            <li className="list">
              <Link onClick={mostrarAlerta}>
                <span className="icon">
                  <FaPowerOff size={25} />
                </span>
                <span className="title">Sair</span>
              </Link>
            </li>
          </ul>
        </div>

        {showAlert && (
          <div id="alerta" className="alerta">
            <p>Você tem certeza que deseja sair?</p>
            <button onClick={confirmado}>Sim</button>

            <button id="botao2" onClick={cancelado}>Não</button>
          </div>
        )}

        <main id="content-area"></main>
      </body>
    </>
  );
};
