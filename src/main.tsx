import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import customTheme from './Theme.tsx';
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>

)
