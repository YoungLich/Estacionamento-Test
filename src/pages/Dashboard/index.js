import * as React from 'react';
import { Chart } from 'react-google-charts';
import { Header } from '../../components/Header';
import Imagem from "../../img/reservedpar1.png";
import './index.css';
import { Cards, CardsContainer, Imge, Main, Title } from './styled';

export const data = [
  ['Disponivel', 'Não Disponivel'],
  ['Disponivél ', 8175000],
  ['Não Disponivél', 3694000],
];

export const data1 = [
  ['Setembro', 'Outubro'],
  ['Setembro', 500],
  ['Outubro', 600],

];

const options1 = {
  title: "Vagas Mensal:",
  pieHole: 0.4,
  is3D: true,
  width: 400,
  height: 300,
  backgroundColor: {
    stroke: "black",
    strokeWidth: 3,
    fill: "transparent",
  },
  titleTextStyle: {
    color: "red",
    fontSize: 18,
    bold: true,
  },
  pieStartAngle: 50,
  sliceVisibilityThreshold: 0.3,
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#010002",
      fontSize: 15,
    },
  },
  colors: ["#fb6b41", "#5015bd"],
};

const options = {
  title: "Vagas Disponíveis:",
  pieHole: 0.5,
  is3D: true,
  width: 400,
  height: 300,
  backgroundColor: {
    stroke: "black",
    strokeWidth: 3,
    fill: "transparent",
  },
  titleTextStyle: {
    color: "red",
    fontSize: 18,
    bold: true,
  },
  pieStartAngle: 30,
  sliceVisibilityThreshold: 0.3,
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#010002",
      fontSize: 15,
    },
  },
  colors: ["#fb6b41", "#2b4e72"],
};

export default function Dashboard() {
  return (
    <>
      <Header />
      <Main className="container">
        <Imge src={Imagem} alt="" />
        <div className="charts-container">
          <Chart
            chartType='PieChart'
            width="100%"
            height="200px"
            data={data}
            options={options}

          />
          <Chart
            chartType='PieChart'
            width="100%"
            height="200px"
            data={data1}
            options={options1}
          />
        </div>
        <CardsContainer>
          <Cards>
            <Title>Reserva Totais</Title>
            <h1>
              Hoje:
              <p>150</p>
            </h1>
            <h1>
              Semana:
              <p>350</p>
            </h1>
            <h1>
              Mês:
              <p>550</p>
            </h1>
          </Cards>
          <Cards>
            <Title>Taxa de ocupação</Title>
            <h1>
              40%
              <p>Ocupado</p>
            </h1>
          </Cards>
          <Cards>
            <Title>Vaga Disponivél</Title>
            <h1>
              Vagas Disponiveis:
              <p>150</p>
            </h1>
            <h1>
              Vagas não Disponiveis:
              <p>80</p>
            </h1>
          </Cards>






        </CardsContainer>
      </Main>
    </>
  );
}
