import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/material";

interface PriceOfDogWalkProps extends BoxProps {
  service: string;
  price: number;
}

const PriceOfDogWalk = ({ service, price, ...rest }: PriceOfDogWalkProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        color="white"
        display="flex"
        alignItems="center"
        gap="8px"
        width="125px"
        borderRadius="8px"
        justifyContent="space-between"
        pl="8px"
        pr="8px"
        height="30px"
        sx={{ background: "linear-gradient(225deg, #E844FF 0%, #8739FF 100%)" }}
        {...rest}
      >
        <Typography fontSize="8px" fontFamily="rubik">
          {service}
        </Typography>
        <Typography fontSize="12px" fontFamily="rubik" fontWeight="bold">
          ${price}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default PriceOfDogWalk;
