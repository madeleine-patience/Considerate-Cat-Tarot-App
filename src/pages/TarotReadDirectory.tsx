import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import Menu from "../components/Menu";
import TarotSpreadBox from "../components/TarotSpreadBox";
import { Box, Typography } from "@mui/material";

const TarotReadDirectory = () => {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Typography></Typography>
      <Box display="flex" justifyContent="center" gap="20px" padding="20px">
        <TarotSpreadBox
          title={"One Card Spread"}
          amountOfCards={1}
          backgroundColor={"#aab6e6"}
          image1={"/artwork/15.jpg"}
          description="A one card draw, sometimes known a vibe check."
        />
        <TarotSpreadBox
          image1={"/artwork/50.jpg"}
          image2={"/artwork/19.jpg"}
          image3={"/artwork/29.jpg"}
          title={"Three Card Spread"}
          amountOfCards={3}
          backgroundColor={"#e6ccae"}
          description="A card for reading the past, present and future of a situation."
        />
        <TarotSpreadBox
          image1={"/artwork/5.jpg"}
          image2={"/artwork/19.jpg"}
          image3={"/artwork/29.jpg"}
          image4={"/artwork/52.jpg"}
          image5={"/artwork/1.jpg"}
          title={"Five Card Spread"}
          amountOfCards={5}
          backgroundColor={"#a7d4b3"}
          description="Another spread for analyzing the past, present and future with more details."
        />
      </Box>
    </ThemeProvider>
  );
};

export default TarotReadDirectory;
