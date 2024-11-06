import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  width: 100%;
  margin-top: -400%; 
  position: sticky;
  top: 0; 
  z-index: 10;
   
  
  
`;

export const Imge = styled.img`
  margin-bottom: 20%;
  margin-left: 390px;
  width:90px;
  padding: 10px;
  position: absolute;

`;

export const CardsContainer = styled.div`
  margin-bottom: -280%;
  margin-left: -1020px;
  display: flex;
  gap: 20px; /* Space between the cards */
  justify-content: center;
  overflow: hidden;
  
   /* Centering cards horizontally */
`;

export const Cards = styled.div`
  background-color: rgb(17, 60, 109);
  border-radius: 30px;
  padding: 30px;
  text-align: center;
  width: 100%; /* Adjust the width to fit inside the flex container */
  max-width: 300px;
  border: 1px solid rgb(235, 87, 29); /* Optional: set a max width for each card */
  p{
    margin-top: -10%;
    align-items:center;
    text-align: right;
    
  }
  h1{
    margin-left: -15px;
    font-size: 20px;
    text-align: left;
  }
`;

export const Title = styled.div`
  color: rgb(7, 6, 6);
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
  color:rgb(235, 87, 29);
`;

export const Button = styled.div`
  margin: 10px 0 10px 10px;
  background-color: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
  border: 1px solid transparent;
  color: rgb(255, 0, 0);
  font-size: 10px;
  padding: 9px 40px;
  cursor: pointer;
`;
