import * as React from 'react';
import { FaParking } from 'react-icons/fa';
import './index.css';
import { Main } from './styled';







export const Dashboard = () => {
  return (
    <Main className="container">
      <div className="cards" >
        <div className='title'>
          <FaParking size={50} color="white" style={
            {
              marginTop: '3px',
              marginLeft: '1px',
            }
          } />
          <h1>Vaga Disponiveis</h1>
          <p></p>
          <button size="small">VERIFICA VAGAS</button>
        </div>
      </div>


    </Main>
  );
}