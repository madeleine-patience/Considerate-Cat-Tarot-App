import "@fontsource/merriweather";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
interface PROPS {
  image: string;
  color: string;
  title: string;
  navigation: any;
}
const CatTile = ({ image, color, title, navigation }: PROPS) => {
  const StyledTile = styled("button")({
    display: "flex",
    width: 250,
    height: 250,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    alignItems: "flex-end",
    fontFamily: theme.typography.h2.fontFamily,
    border: "2px solid #d47daf",
  });

  const BottomTile = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    backgroundColor: color,
    borderTop: "2px solid #d47daf",
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledTile onClick={navigation}>
        <BottomTile>{title}</BottomTile>
      </StyledTile>
    </ThemeProvider>
  );
};

export default CatTile;
