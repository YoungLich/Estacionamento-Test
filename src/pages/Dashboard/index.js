import * as React from 'react';
import { Chart } from 'react-google-charts';
import { Header } from "../../components/Header/index";
import Image from "../../img/Reserverd.png";
import './dashboard.css';
import './responsivedash.css';

export const data = [
  ['Disponivel', 'Não Disponivel'],
  ['Disponivél ', 21],
  ['Não Disponivél', 39],
];

export const data1 = [
  ['Setembro', 'Outubro'],
  ['Setembro', 525],
  ['Outubro', 680],

];

const options1 = {
  title: "Crescimento de Clientes:",
  pieHole: 0.4,
  is3D: true,
  width: 380,
  height: 200,
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
  width: 380,
  height: 200,
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

      <div className='Main1'>
        <div className="dashboard">
          <img src={Image} alt="Logo" className="logo" />
        </div>
        <div className="charts-container">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
          />
          <Chart
            chartType="PieChart"
            data={data1}
            options={options1}
          />
        </div>
      </div>
      <div className="cards-container">
        <div className='card'>
          <h1>Reserva Totais</h1>
          <h2>Hoje: <p>42</p></h2>
          <h2>Semana: <p>45</p></h2>
          <h2>Mês: <p>410</p></h2>
        </div>
        <div className='card'>
          <h1>Taxa de ocupação</h1>
          <h2>65% <p>ocupado</p></h2>
        </div>
        <div className='card'>
          <h1>Vagas Disponíveis</h1>
          <h2>Disponiveis: <p>39</p></h2>
          <h2>Não Disponiveis: <p>13</p></h2>
          <h2>Manutenção: <p>8</p></h2>
        </div>
      </div>
    </>
  );
}

