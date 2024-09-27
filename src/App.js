import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes/index';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyles />
    </BrowserRouter>

  );
};

export default App;
