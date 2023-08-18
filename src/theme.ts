import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#a9d0d6",
    },
    secondary: {
      main: "#a0bda3",
    },
  },
  typography: {
    h1: {
      fontFamily: '"Lora", sans-serif',
    },
    h2: {
      fontFamily: '" Raleway", sans-serif',
    },
    body1: {
      fontFamily: '"Volkhov", sans-serif',
    },
  },
});

export default theme;
