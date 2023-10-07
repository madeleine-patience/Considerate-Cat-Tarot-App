import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

interface PurrlaroidProps extends ICatProps {
  animation?: boolean;
}

const Purrlaroid = ({
  data,
  handleClick,
  displayName,
  style,
  imageSize,
  animation = true,
}: PurrlaroidProps) => {
  const StyledPurrlaroid = styled("div")({
    display: "flex",
    borderRadius: "5px",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "lightYellow",
    maxWidth: imageSize,
    padding: 20,
    border: "1px solid lightGrey",
    transform: "rotate(0deg)",
    transition: "1s transform ease",
    "&:hover": {
      transform: animation ? "rotate(3deg)" : "rotate(0)",
    },
  });
  const PurrlaroidContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: 20,
  });
  const PurrlaroidImage = styled("img")({
    width: imageSize,
    height: imageSize,
    objectFit: "cover",
    transition: "opacity .5s ease-in-out",
    "&:hover": {
      opacity: animation ? 0 : 1,
    },
  });

  const PurrlaroidAnimation = styled("img")({
    width: imageSize,
    height: imageSize,
    objectFit: "cover",
    position: "absolute",
    zIndex: -1,
  });

  const PurrlaroidText = styled("h3")({
    fontFamily: " 'Homemade Apple', cursive",
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
          {animation && (
            <PurrlaroidAnimation
              onClick={() => handleClick?.(data)}
              src={"/Art/Abe.jpg"}
            />
          )}
          {displayName && <PurrlaroidText>{data.name}</PurrlaroidText>}
        </PurrlaroidContent>
      </StyledPurrlaroid>
    </ThemeProvider>
  );
};

export default Purrlaroid;

// marble_wraith: Also worth noting, be careful about which properties you animate on. Stick to Translate, scale, rotate, and opacity. Because those are the ones that can be GPU accelerated.
