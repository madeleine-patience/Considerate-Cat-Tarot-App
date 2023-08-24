import MyButtonProps from "../types/Button.type";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const StyledButton = styled("button")(() => ({
  textAlign: "center",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  background: "pink",
  borderRadius: "10px",
  border: "2px solid #d47daf",
  fontFamily: theme.typography.h1.fontFamily,
  "&:hover": {
    background: "#f7e6ef",
  },
}));

const Button = ({ buttonName, style, ...rest }: MyButtonProps) => {
  return (
    <StyledButton {...rest} data-button-name={buttonName} style={style}>
      {buttonName}
    </StyledButton>
  );
};

export default Button;
