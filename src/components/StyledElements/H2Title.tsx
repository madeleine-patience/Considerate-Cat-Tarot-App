import { styled } from "@mui/system";
import theme from "../../theme";

const H2Title = styled("h2")({
  fontSize: "70px",
  fontStyle: "italic",
  fontWeight: "bold",
  fontFamily: theme.typography.h1.fontFamily,
  color: "white",
});

export default H2Title;
