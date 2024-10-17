import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: rgb(17, 60, 109);
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
    
    
  }

  &:hover {
    background-color: rgb(235, 87, 29);
    
    
  }

`;

export const ProfilePicture = styled.div`
  
    width: 36px;
    height: 36px;
    border-radius: 50px;
    color: red;
  
`;