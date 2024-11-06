import styled from 'styled-components';

export const Container = styled.div`
 
  
  

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    top: 35px;  
    left: 20px;  
    cursor: pointer;
  }

  &:hover > .menu {   
    opacity: 1;
    visibility: visible;
  }
`;

export const Menu = styled.div`
  position: fixed;  
  top: 0; 
  text-decoration: none;
  width: 200px;
  height: 100%; 
  background-color: #2D3748;
  padding: 10px;
  border-radius: 0 5px 5px 0;  /* Bordas arredondadas apenas na direita */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    

    li {
      margin: 10px 0;
      color: white;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }
  }

  
  &:hover {
    opacity: 1;
    visibility: visible;
  }
`;
