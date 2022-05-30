import React from "react";
import ReactDOM from "react-dom/client";
import AppBar from "./parts/AppBar";
import BasicCard from "./parts/BasicCard";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6d4c41",
    },
    secondary: {
      main: "#c0ca33",
    },
    warning: {
      main: "#d32f2f",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <BasicCard />
    </ThemeProvider>
  </React.StrictMode>
);
