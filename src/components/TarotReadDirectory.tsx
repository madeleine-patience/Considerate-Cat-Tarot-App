import Box from "@mui/material/Box";
import TarotFront from "./TarotFront";
import { Typography } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

interface TarotSpreadProps {
  title: string;
  amountOfCards: number;
  width: number;
  backgroundColor: string;
}

const TarotSpreadBox = ({
  title,
  amountOfCards = 1,
  width,
  backgroundColor,
}: TarotSpreadProps) => {
  const theme = useTheme();

  const StyledTarotCard = styled("img")({});
  return (
    <>
      <Box
        gap="8px"
        flexDirection="column"
        justifyContent="center"
        borderRadius={5}
        width={300}
        height={300}
        position="relative"
        sx={{ backgroundColor: { backgroundColor } }}
      ></Box>
    </>
  );
};

export default TarotSpreadBox;
