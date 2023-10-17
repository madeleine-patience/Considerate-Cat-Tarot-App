import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useState } from "react";
import H1Title from "../StyledElements/H1Title";
import { Typography } from "@mui/material";

interface CirclePropEvents {
  hover: () => void;
}

interface AnimatedCircleProps extends CirclePropEvents {
  style: any;
  imageSrc: string;
  ToolTipText: string;
  toolTipTop: number;
  toolTipRight: number;
  textTop: number;
  textRight: number;
  showHide: boolean;
}

const Tooltip = styled("img")({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 200,
  height: 200,
  color: "black",
});

const Circle = styled("div")({
  "@keyframes lightUp": {
    "0%": {},

    "100%": { transform: "scale(1.3)" },
  },
  position: "absolute",
  width: 20,
  height: 20,
  borderRadius: "50%",
  background: "rgba(255, 255, 255, .5)",
  border: "3px solid rgba(255, 255, 255, .5)",
  animation: "1.5s ease 700ms infinite alternate none running lightUp",
  "&:hover": {},
});

const AnimatedCircle = ({
  style,
  imageSrc,
  ToolTipText,
  toolTipTop,
  toolTipRight,
  textTop,
  textRight,
  hover,
  showHide,
}: AnimatedCircleProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Circle onMouseEnter={hover} onMouseLeave={hover} style={style}></Circle>
      {showHide && (
        <div>
          <Tooltip
            src={imageSrc}
            style={{
              position: "absolute",
              top: `${toolTipTop}px`,
              right: `${toolTipRight}px`,
              width: 250,
              height: 250,
            }}
          ></Tooltip>
          <Typography
            fontSize="14px"
            textAlign="center"
            width="175px"
            style={{
              zIndex: 1,
              position: "absolute",
              top: textTop,
              right: textRight,
            }}
          >
            {ToolTipText}
          </Typography>
        </div>
      )}{" "}
    </ThemeProvider>
  );
};

export default AnimatedCircle;
