import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


//import { Login } from './containers/Login'

import AppProvider from "./hooks";
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';
import { Router } from './routes';





   createRoot(document.getElementById('root')).render(
      <StrictMode>
           <ThemeProvider theme={standardTheme}>
           <AppProvider>
           <BrowserRouter>
              <Router/>
           </BrowserRouter>
          <GlobalStyles/>
          <ToastContainer  autoClose={3000} theme='dark'/>
          </AppProvider>
          </ThemeProvider>
        </StrictMode>,
)
