import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    //Blues
    primary: {
      main: "#a9d0d6",
      dark: "#8781b3",
    },
    //Purples
    secondary: {
      main: "#c5a9d9",
      dark: "#c995ed",
    },
    //Pinks
    background: {
      default: "#ce9cd6",
      paper: "#d4b4d9",
    },
  },
  typography: {
    h1: {
      fontFamily: '"Lora", sans-serif',
    },
    h2: {
      fontFamily: '"Raleway", sans-serif',
    },
    body1: {
      fontFamily: '"Volkhov", sans-serif',
    },
  },
  spacing: 20,
});

export default theme;
