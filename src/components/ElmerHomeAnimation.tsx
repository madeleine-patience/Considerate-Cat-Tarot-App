import "@fontsource/merriweather";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const ElmerHomeAnimation = () => {
  const StyledTile = styled("button")({});

  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default ElmerHomeAnimation;
