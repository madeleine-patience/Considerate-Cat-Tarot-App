import MyButtonProps from "../types/Button.type";
import { styled } from "@mui/system";

const StyledButton = styled("button")(({ theme }) => ({
  textAlign: "center",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  background: "pink",
  borderRadius: "10px",
}));

const Button = ({ buttonName, style, ...rest }: MyButtonProps) => {
  return (
    <StyledButton {...rest} data-button-name={buttonName} style={style}>
      {buttonName}
    </StyledButton>
  );
};

export default Button;
