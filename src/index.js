import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBar from './parts/AppBar'
import Table from './parts/Table'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#40241a',
    },
    secondary: {
      main: '#8c9900',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Table />
    </ThemeProvider>
  </React.StrictMode>
)
