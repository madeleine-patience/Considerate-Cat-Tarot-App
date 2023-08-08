import shadows from "@mui/material/styles/shadows";
import { styled } from "@mui/system";
import ICatProps from "../types/CatProps";

const StyledPurrlaroide = styled("div")({
  display: "flex",
  borderRadius: "5px",
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "#FFF3E7",
  paddingBottom: "20px",
  width: "300px",
  margin: "10px",
  cursor: "pointer",
  transition: "all 400ms ease",
  border: "1px solid #D2C3B7",
  "&:hover div": {
    backgroundSize: "105%",
    transform: "scale(1.05) rotate(4deg)"
  },
  "&:hover": {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    transform: "scale(1.02) rotate(-8deg)"
  }
});

const PurrlaroidImage = styled("div")({
  width: "260px",
  height: "230px",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  margin: "20px",
  transition: "all 200ms ease",
  border: "1px solid #8691A7",
});

const Purrlaroid = ({ data, handleClick }: ICatProps) => {
  return (
    <StyledPurrlaroide onClick={() => handleClick?.(data)}>
      <div>
        <PurrlaroidImage style={{backgroundImage: `url(${data.image})`}} catName={data.name}/>
        <h3 style={{fontSize: "1.4rem"}}>{data.name}</h3>
      </div>
    </StyledPurrlaroide>
  );
};

export default Purrlaroid;
