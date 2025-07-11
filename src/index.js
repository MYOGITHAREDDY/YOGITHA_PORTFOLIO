import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import './index.css';
import App from './App';
import theme from "./theme";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      
      {/* Wrap App inside BrowserRouter with basename */}
      <BrowserRouter basename="/Yogitha-s-portfolio">
        <App />
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
