import { styled } from "@mui/system";
import theme from "../../theme";

const H1Title = styled("h1")({
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: "bold",
  fontSize: 80,
  textShadow: " 3px 3px grey",
  color: "white",
});

export default H1Title;
