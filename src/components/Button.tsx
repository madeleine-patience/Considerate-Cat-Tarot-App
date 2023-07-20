import MyButtonProps from "../types/Button.type";
import { styled } from "@mui/system";

const StyledButton = styled("div")(({ theme }) => ({
  background: "pink",
  textAlign: "center",
  padding: "10px",
  borderRadius: "10px",
}));

const Button = ({ buttonName, ...rest }: MyButtonProps) => {
  return (
    <StyledButton>
      <button {...rest} data-button-name={buttonName}>
        {buttonName}
      </button>
    </StyledButton>
  );
};

export default Button;
