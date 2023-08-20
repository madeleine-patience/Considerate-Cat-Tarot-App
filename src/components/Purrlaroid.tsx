import shadows from "@mui/material/styles/shadows";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const StyledPurrlaroid = styled("div")({
  display: "flex",
  borderRadius: "5px",
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "lightYellow",
  width: "300px",
  height: "350px",
  boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .1)",
  border: "1px solid lightGrey",
});

const PurrlaroidImage = styled("img")({
  width: "300px",
  height: "300px",
  objectFit: "cover",
  padding: "20px",
});

const PurrlaroidFont = styled("h3")({
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: 28,
  fontWeight: "bold",
  fontStyle: "italic",
  color: "#7d7168",
});

const Purrlaroid = ({ data, handleClick, displayName, style }: ICatProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPurrlaroid style={style}>
        <div>
          <PurrlaroidImage
            onClick={() => handleClick?.(data)}
            src={data.image}
          />
          {displayName && <PurrlaroidFont>{data.name}</PurrlaroidFont>}
        </div>
      </StyledPurrlaroid>
    </ThemeProvider>
  );
};

export default Purrlaroid;
