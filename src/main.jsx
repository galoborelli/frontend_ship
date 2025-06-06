import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "@Redux/store/store.js";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './index.css';
import './i18n';

import App from './App.jsx';

import { motion, useReducedMotion } from "framer-motion";







// Usar una función para aplicar lógica con hooks (como useReducedMotion)
function AnimatedWrapper({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}






createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AnimatedWrapper>
            <App />
          </AnimatedWrapper>
        </Provider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
);
