import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

 .sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
  }


`;


export const Form = styled.form`
  margin-top: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
  
  .form-container{ 
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  span{
    font-size: 12px;
    margin: 20px 0;
  }



 button{
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

button.hidden{
    background-color: transparent;
    border-color: #fff;
}

input{
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}
 
`;

export const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 100px 0 0 100px;
  z-index: 1000;

`;


export const Togglepanel = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  
  display: flex;
`;

export const ToggleRight = styled.div`
  right: 0;
  transform: translateX(0);

`;
export const Imge = styled.img`
  width: 380px;
  padding: 10px;

`;