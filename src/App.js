import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./globalstyle.css";
import Rotas from './routes/index';



function App() {
  return (
    <BrowserRouter>
      <Rotas />

    </BrowserRouter>

  );
};

export default App;
