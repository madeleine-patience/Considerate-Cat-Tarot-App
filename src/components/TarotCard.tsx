import { styled } from "@mui/system";
import { CSSProperties } from "react";

const StyledTarotCard = styled("img")(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: "10px 10px 5px rgba(0,0,0,0.2)",
}));

function TarotFront({
  imageSrc,
  onClick,
  style,
}: {
  imageSrc: string;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  return (
    <div onClick={onClick} style={style}>
      <StyledTarotCard src={imageSrc} />
    </div>
  );
}

export default TarotFront;
