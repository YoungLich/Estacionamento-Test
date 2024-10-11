import * as React from 'react';
import { Chart } from 'react-google-charts';
import './index.css';
import { Main } from './styled';

export const data = [
  ['Disponivel', 'Não Disponivel'],
  ['Disponivél ', 8175000],
  ['Não Dispoinvél', 3694000],

];
export const data1 = [
  ['Setembro', 'Outubro'],
  ['Setemnbro ', 500],
  ['Outubro', 100],

];


const options = {

  title: "Vagas Disponiveis:",
  pieHole: 0.5,
  is3D: true,
  width: 400,
  height: 300,
  backgroundColor: {
    stroke: "blcak",
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
      color: "#233238",
      fontSize: 10,
    },
  },
  colors: ["#00FA9A", "#FF0000"],
};

const options1 = {

  title: "Vagas Mensal:",
  pieHole: 0.5,
  is3D: true,
  width: 400,
  height: 300,
  backgroundColor: {
    stroke: "blcak",
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
      color: "#233238",
      fontSize: 10,
    },
  },
  colors: ["#00FA9A", "#FF0000"],
};

export default function Dashboard() {


  return (

    <Main className="container" >

      <Chart
        chartType='PieChart'
        width="100%"
        height="200px"
        data={data}
        options={options}
        style={
          {
            left: "120px",
            position: "relative",
            display: "flex",

          }
        }
      />
      <Chart
        chartType='ColumnChart'
        width="100%"
        height="200px"
        data={data1}
        options={options1}
        style={
          {
            left: "120px",
            position: "relative",
            display: "flex",

          }
        }
      />

    </Main>


  );
}
