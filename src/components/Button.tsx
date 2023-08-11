import MyButtonProps from "../types/Button.type";
import { styled } from "@mui/system";

const StyledButton = styled("button")(({ theme }) => ({
  textAlign: "center",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  background: "#FAC0CB",
  border: "1px solid #F0B2BF",
  borderRadius: "10px",
  transition: "background-color 160ms ease",
  "&:hover": {
    backgroundColor: "#FCD4DC"
  },
  "&:focus": {
    backgroundColor: "#FCD4DC"
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
