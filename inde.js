import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
//import { Main } from './styled';

export const Dashboard = () => {
  return (

    <Main className="dashboard">
      <section className="dashboard-welcome">
        <h1>Dashboard</h1>
        <p>Este é o painel principal do sistema Reserved Park.</p>
      </section>

      <section className="dashboard-overview">

        <div className="card vagas-disponiveis">
          <h2>Vagas Disponíveis</h2>
          <div className="vagas-container">
            <p><span id="vagas-disponiveis">10</span> vagas disponíveis</p>
            <button id="link">
              <Link to="#" id="verificar-vagas-link"> Verificar Vagas</Link>
            </button>
          </div>
        </div>


        <div className="card saldo-dono">
          <h2>Saldo Disponível</h2>
          <div className="saldo-container">
            <p>R$ <span id="saldo-disponivel">2.500,00</span></p>
            <button id="sacar-saldo">Sacar</button>
          </div>
        </div>


        <div className="card reservas-totais">
          <h2>Reservas Totais</h2>
          <p>Hoje: <span id="reservas-dia">0</span></p>
          <p>Semana: <span id="reservas-semana">0</span></p>
          <p>Mês: <span id="reservas-mes">0</span></p>
        </div>


        <div className="card ocupacao-estacionamento">
          <h2>Taxa de Ocupação</h2>
          <p><span id="ocupacao-percentage">0</span>% ocupados</p>
        </div>


        <div className="card receita-gerada">
          <h2>Receita Gerada</h2>
          <p>R$ <span id="receita-total">0,00</span></p>
        </div>


        <div className="card estacionamentos-populares">
          <h2>Estacionamentos Mais Populares</h2>
          <ul id="lista-populares"></ul>
        </div>


        <div className="card tempo-permanencia">
          <h2>Tempo Médio de Permanência</h2>
          <p><span id="tempo-medio">0</span> minutos</p>
        </div>


        <div className="card picos-ocupacao">
          <h2>Picos de Ocupação</h2>
          <p>Horário de pico: <span id="horario-pico">00:00</span></p>
        </div>


        <div className="card solicitar-relatorios">
          <h2>Solicitar Relatórios</h2>
          <div className="relatorios-container">
            <p>Obtenha relatórios detalhados de ocupação e transações.</p>
            <button id="solicitar-relatorios-btn">Solicitar Relatório</button>
          </div>
        </div>


        <div className="card configuracoes">
          <h2>Configurações</h2>
          <div className="configuracoes-container">
            <p>Personalize as configurações do sistema,
              acessando o botão abaixo.</p>
            <button id="configuracoes-btn">Acessar Configurações</button>
          </div>
        </div>
      </section>
    </Main>
  );
};
