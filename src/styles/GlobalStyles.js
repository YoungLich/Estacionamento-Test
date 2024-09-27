import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    
  }

  body {
  
    background: linear-gradient(to right, #ffffff, #2a363b);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
   
  }

  @media (max-width: 768px) {
    #root {
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    #root {
      flex-direction: column;
      width: 100%;
      padding: 0;
    }
  }

  @media (max-width: 320px) {
    #root {
      width: 100%;
    }
  }
  
`;
