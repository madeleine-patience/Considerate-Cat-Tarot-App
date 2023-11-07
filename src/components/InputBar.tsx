import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
interface InputBarProps {}
const InputBar = ({}: InputBarProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="213px"
      height="33px"
      sx={{ backgroundColor: "white", borderRadius: "17px" }}
    >
      <Typography pl="20px" fontFamily="rubik" fontSize="9px" color="#C5C9CC">
        {" "}
        Type a message ...
      </Typography>
      <ArrowCircleRightIcon sx={{ pr: "4px" }} />
    </Box>
  );
};

export default InputBar;
