import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/material";

interface TextBubbleProps extends BoxProps {
  textContent: string;
  direction?: boolean;
}
const TextBubble = ({ textContent, direction, ...rest }: TextBubbleProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: "128px",
          padding: "8px",
          borderRadius: "8px",
          backgroundColor: "#EEE5F4",
          alignSelf: direction ? "flex-end" : "flex-start",
        }}
        {...rest}
      >
        <Typography fontSize="8px" fontFamily="rubik" color="#9341C8">
          {" "}
          {textContent}{" "}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default TextBubble;
