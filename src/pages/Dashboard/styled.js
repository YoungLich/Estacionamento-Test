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

export const Cards = styled.div` 
  background-color: rgba(247, 188, 232, 0.322);
  border-radius: 30px;
  padding: 30px;
  text-align: center;
  box-shadow: 5px 5px 5px rgb(38, 48, 197);
`;

export const Title = styled.div`
  color: rgb(7, 6, 6);
  font-size: 15px;
  margin-bottom: 20px;
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
