import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s;
  border-radius: 10px;
  margin: 5px 0;
  position: relative;

  &:hover {
    background-color: rgb(235, 87, 29);
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: 24px;

  svg {
    transition: transform 0.3s ease;
  }

  ${Container}:hover & svg {
    transform: scale(1.1); 
  }
`;

export const Name = styled.span`
  font-size: 18px;
  margin-left: 10px;
  display: inline-block;
  opacity: 1; 
  visibility: hidden; 
  transition: opacity 0.3s ease, visibility 10s 10s;   
  ${Container}:hover & {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s 0s; 
  }
`;
