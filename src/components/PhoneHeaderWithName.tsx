import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box, CardMedia, Typography } from "@mui/material";
import Eddie from "../images/Cats/Eddie.jpg";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PetsIcon from "@mui/icons-material/Pets";
interface PhoneHeaderWithNameProps {
  callerName: string;
  image: string;
}
const PhoneHeaderWithName = ({
  callerName,
  image,
}: PhoneHeaderWithNameProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        color="white"
        width="228px"
        height="66px"
        display="flex"
        alignItems="flex-end"
        sx={{
          padding: "10px",
          background: "linear-gradient(225deg, #E844FF 0%, #8739FF 100%)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "6px",
          borderBottomLeftRadius: "6px",
        }}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            <Box display="flex" gap="8px">
              <ArrowBackIcon />
              <img
                src={image}
                width="24px"
                height="24px"
                style={{
                  borderRadius: "100%",
                  border: "1px white solid",
                  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
                }}
              />
              <Box
                display="flex"
                flex="1 1 auto"
                flexDirection="column"
                justifyContent="center"
                fontFamily="rubik"
              >
                <Typography
                  fontWeight="medium"
                  fontSize="11px"
                  fontFamily="inherit"
                >
                  {callerName}
                </Typography>
                <Typography fontSize="8px" color="#D99EFF" fontFamily="inherit">
                  Available to walk
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
          <img width="25px" height="25px" src={Eddie}></img>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PhoneHeaderWithName;
