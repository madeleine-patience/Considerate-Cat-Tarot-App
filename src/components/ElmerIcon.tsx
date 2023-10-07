import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

const Keyframes = styled("div")({});
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
  "@keyframes elmerRise": {
    "0%": {
      top: 80,
    },
    "100%": { top: -4 },
  },
  position: "absolute",
  width: 250,
  overflow: "hidden",
  left: -87,
  top: 80,
  animation: "800ms ease 700ms 1 normal none running elmerRise",
  animationFillMode: "forwards",
}));

const Menu = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Link
        to="/LandingPage"
        style={{ background: "transparent", border: "0px" }}
      >
        <Circle>
          <Elmer src="/Art/ElmerBasic.png" />
        </Circle>
      </Link>
    </ThemeProvider>
  );
};

export default Menu;
