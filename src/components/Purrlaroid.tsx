import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const Purrlaroid = ({
  data,
  handleClick,
  displayName,
  style,
  imageSize,
}: ICatProps) => {
  const StyledPurrlaroid = styled("div")({
    display: "flex",
    borderRadius: "5px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "lightYellow",
    maxWidth: imageSize,
    padding: 20,
    border: "1px solid lightGrey",
  });

  const PurrlaroidImage = styled("img")({
    width: imageSize,
    height: imageSize,
    objectFit: "cover",
  });

  const PurrlaroidContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 20,
  });

  const PurrlaroidFont = styled("h3")({
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#7d7168",
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledPurrlaroid style={style}>
        <PurrlaroidContent>
          <PurrlaroidImage
            onClick={() => handleClick?.(data)}
            src={data.image}
          />
          {displayName && <PurrlaroidFont>{data.name}</PurrlaroidFont>}
        </PurrlaroidContent>
      </StyledPurrlaroid>
    </ThemeProvider>
  );
};

export default Purrlaroid;
