import Box from "@mui/material/Box";
import TarotFront from "./TarotFront";
import { Typography } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

interface TarotSpreadProps {
  title: string;
  amountOfCards: number;
  backgroundColor: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  description: string;
}

const TarotSpreadBox = ({
  title,
  amountOfCards = 1,
  backgroundColor,
  image1,
  image2,
  image3,
  image4,
  image5,
  description,
}: TarotSpreadProps) => {
  const theme = useTheme();

  const CardContainer = styled(Box)({
    "&:hover > *": {
      transition: "transform .5s ease-in-out",
    },

    "&:hover > *:nth-child(1)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },
    "&:hover > *:nth-child(2)": {
      transform: " rotate(-3deg) scale(1.2) translate(0px, -10px) ",
    },
    "&:hover > *:nth-child(3)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },

    "&:hover > *:nth-child(4)": {
      transform: " rotate(-3deg) scale(1.2) translate(0px, -10px) ",
    },

    "&:hover > *:nth-child(5)": {
      transform: " rotate(3deg) scale(1.2) translate(0px, -10px) ",
    },
  });

  const StyledTarotCard = styled("img")({
    top: 25,
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    borderRadius: 10,
    transition: "transform .4s ease-in-out",
    border: "4px white solid",
    width: 100,
  });
  return (
    <Box>
      <Box
        gap="8px"
        flexDirection="column"
        justifyContent="center"
        width={300}
        height={300}
        position="relative"
        sx={{
          backgroundColor: "#e6d1d3",
          borderTopLeftRadius: "10%",
          borderTopRightRadius: "10%",
        }}
      >
        <Typography
          pt="20px"
          fontSize={30}
          color="grey"
          variant="h6"
          textAlign="center"
          fontFamily={theme.typography.h1.fontFamily}
        >
          {title}
        </Typography>
        <CardContainer
          position="relative"
          width={300}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <StyledTarotCard
            style={{ position: "absolute", right: "100px", zIndex: 2 }}
            src={image1}
          />
          {amountOfCards > 2 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "130px", zIndex: 1 }}
              src={image2}
            />
          )}
          {amountOfCards > 2 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "75px", zIndex: 1 }}
              src={image3}
            />
          )}
          {amountOfCards > 4 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "170px" }}
              src={image4}
            />
          )}
          {amountOfCards > 4 && (
            <StyledTarotCard
              style={{ position: "absolute", right: "24px" }}
              src={image5}
            />
          )}
        </CardContainer>
      </Box>
      <Box
        gap="8px"
        flexDirection="column"
        justifyContent="center"
        width={300}
        height={200}
        position="relative"
        display="flex"
        alignContent="center"
        sx={{
          backgroundColor: "#daf0e0",
          borderBottomRightRadius: "10%",
          borderBottomLeftRadius: "10%",
        }}
      >
        <Typography
          padding="20px"
          fontSize={16}
          color="grey"
          variant="h6"
          textAlign="center"
          fontFamily={theme.typography.h1.fontFamily}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TarotSpreadBox;

// marble_wraith: Also worth noting, be careful about which properties you animate on. Stick to Translate, scale, rotate, and opacity. Because those are the ones that can be GPU accelerated.
