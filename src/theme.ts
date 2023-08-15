import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e8ccda",
    },
    secondary: {
      main: "#ded5ad",
    },
  },
  typography: {
    fontFamily: '"Abril Fatface", sans-serif', // this sets the default font family

    // For headers
    h1: {
      fontFamily: '"Yomogi", sans-serif', // this sets the default font family
    },
    h2: {
      fontFamily: '" Raleway", sans-serif',
    },
  },
});

export default theme;
