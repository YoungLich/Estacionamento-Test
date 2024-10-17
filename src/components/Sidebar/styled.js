import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(17, 60, 109);
  text-decoration: none;
  position: fixed;
  height: 100%;
  top: 0px;
  border-radius: 10px;
  border-right: 13px solid rgb(235, 87, 29);
  width: 300px;
  left: ${props => (props.sidebar ? '0' : '-100%')}; 
  animation: showSidebar .4s;
  

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

export const ProfilePicture = styled.div`

  border-radius: 50%;
  margin: -40px 100px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid #fff8f8;
  transition: width 0.3s ease, height 0.3s ease;
    
  
`;