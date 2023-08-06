import shadows from "@mui/material/styles/shadows";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";

const StyledPurrlaroide = styled("div")({
  display: "flex",
  borderRadius: "5px",
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "lightYellow",
  width: "300px",
  margin: "10px",
  boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .1)",
});

const PurrlaroidImage = styled("img")({
  width: "300px",
  padding: "20px",
});

const Purrlaroid = ({ data, handleClick }: ICatProps) => {
  return (
    <StyledPurrlaroide>
      <div>
        <PurrlaroidImage onClick={() => handleClick?.(data)} src={data.image} />
        <h3>{data.name}</h3>
      </div>
    </StyledPurrlaroide>
  );
};

export default Purrlaroid;
