import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
const Container = styled("div")(({ theme }) => ({}));
const Circle = styled("div")(({ theme }) => ({
  width: 100,
  height: 100,
  background: "#e6dbbe",
  borderRadius: "100%",
  overflow: "hidden",
  position: "relative",
  border: "10px solid #a0b594",
}));
const Elmer = styled("img")(({ theme }) => ({
  width: 250,
  overflow: "hidden",
  position: "absolute",
  left: -87,
  top: -4,
}));

const Menu = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Circle>
          <Elmer src="/Art/ElmerBasic.png" />
        </Circle>
      </Container>
    </ThemeProvider>
  );
};

export default Menu;
