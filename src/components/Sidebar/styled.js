import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(17, 60, 109);
  text-decoration: none;
  position: fixed;
  height: 100%;
  top: 0px;
  border-radius: 1px;
  border-right: 10px solid rgb(235, 87, 29);
  width: 60px; 
  left: 0;
  transition: width 0.3s ease, opacity 0.3s ease; /* Transição suave */

  &:hover {
    width: 300px; /* Expande a largura quando o mouse passar */
  }

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  text-decoration: none;
`;


