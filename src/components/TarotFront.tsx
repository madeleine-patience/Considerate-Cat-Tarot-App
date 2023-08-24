import { styled } from "@mui/system";
import { CSSProperties } from "react";

function TarotFront({
  imageSrc,
  onClick,
  style,
  width,
}: {
  imageSrc: string;
  onClick?: () => void;
  style?: CSSProperties;
  width: number;
}) {
  const StyledTarotCard = styled("img")(({ theme }) => ({
    borderRadius: "20px",
    boxShadow: "10px 10px 5px rgba(0,0,0,0.2)",
    width: width,
  }));

  return (
    <div onClick={onClick} style={style}>
      <StyledTarotCard src={imageSrc} />
    </div>
  );
}

export default TarotFront;
