import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import Menu from "../components/Menu";
import AnatomyOfATarotCard from "../components/AnatomyOfATarotCard";

const AnatomyOfATarotCarPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <AnatomyOfATarotCard />
    </ThemeProvider>
  );
};

export default AnatomyOfATarotCarPage;
