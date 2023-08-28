import "@fontsource/merriweather";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
interface PROPS {
  image: string;
  color: string;
  color2: string;
  title: string;
  navigation: any;
}
const CatTile = ({ image, color, color2, title, navigation }: PROPS) => {
  const StyledTile = styled("button")({
    display: "flex",
    width: 250,
    height: 250,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    alignItems: "flex-end",
    fontFamily: theme.typography.h2.fontFamily,
    border: "3px solid #d47daf",
    padding: 10,
  });

  const BottomTile = styled("button")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    backgroundColor: color,
    border: "3px solid #d47daf",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: color2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledTile onClick={navigation}>
        <BottomTile onClick={navigation}>{title}</BottomTile>
      </StyledTile>
    </ThemeProvider>
  );
};

export default CatTile;
