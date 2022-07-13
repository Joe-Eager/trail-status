import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import BasicCard from './parts/BasicCard';
import AppBar from './parts/AppBar';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6d4c41',
    },
    secondary: {
      main: '#c0ca33',
    },
    warning: {
      main: '#d32f2f',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <BasicCard />
      <div style={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: '#757575' }}>
          My twitter bot sucks so it could be wrong?
        </Typography>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
