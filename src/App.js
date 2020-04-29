import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/globals';
import Cabec from './pages/Main/Cabec';

function App() {
  return (
    <>
      <Cabec />
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
