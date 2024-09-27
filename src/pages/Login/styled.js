import styled from 'styled-components';

export const Container = styled.section`
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden; 

  @media (max-width: 768px) {
    width: 90%; 
  }
  

  @media (max-width: 480px) {
    width: 100%; 
    min-height: 400px; 
  }
 
  img{
  background-color: white;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: relative;
  opacity: 0.4;
  width: 680px;
  max-width: 100%;
  min-height: 480px;
  padding: 20px; 
 }
  h2{
    font-size: 50px;
    line-height: 1.5;
    letter-spacing: 0.3px;
    margin: 4px 0;
    color: black;
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  

  span {
    margin-bottom: 5px;
    font-size: 14px;
    color: #000000;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  button {
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
    
    @media (max-width: 480px) {
      padding: 8px 30px;
      font-size: 11px;
    }
    
    &.hidden {
      background-color: transparent;
      border-color: #fff;
    }
  }

  form {
    color: #f42a55;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 15px;
    height: 100%;
    
  
    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }

  input {
    background-color: #eee;
    border: none;
    margin: 5px 0;
    padding: 10px 18px;
    font-size: 15px;
    border-radius: 8px;
    width: 93%;
    outline: none;
    
    @media (max-width: 480px) {
      font-size: 14px;
      width: 90%;
    }
  }


  .form-container {
    margin: auto 150px;
    position: absolute;
    align-items: center;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    display: flex;
  }

  .sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }




  .password {
    color: #000000;
    font-size: 15px;
    text-decoration: none;
    margin: 1px 0 10px;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  
`;
