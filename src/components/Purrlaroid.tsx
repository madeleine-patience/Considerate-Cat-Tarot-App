import shadows from "@mui/material/styles/shadows";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const StyledPurrlaroide = styled("div")({
  display: "flex",
  borderRadius: "5px",
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "lightYellow",
  width: "300px",
  height: "350px",
  margin: "10px",
  boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .1)",
  border: "1px solid lightGrey",
});

const PurrlaroidImage = styled("img")({
  width: "300px",
  height: "300px",
  objectFit: "Cover",
  padding: "20px",
});
const PurrlaroidFont = styled("h3")({
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: 28,
});

const Purrlaroid = ({ data, handleClick }: ICatProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPurrlaroide>
        <div>
          <PurrlaroidImage
            onClick={() => handleClick?.(data)}
            src={data.image}
          />
          <PurrlaroidFont>{data.name}</PurrlaroidFont>
        </div>
      </StyledPurrlaroide>
    </ThemeProvider>
  );
};

export default Purrlaroid;
