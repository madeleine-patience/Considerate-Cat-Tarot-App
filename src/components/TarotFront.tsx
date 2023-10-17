import { styled } from "@mui/system";
import { CSSProperties } from "react";
import Tooltip from "@mui/material/Tooltip";
import data from "../data/tarotCardData";

export interface TarotFrontProps {
  imageSrc: string;
  onClick?: () => void;
  style?: CSSProperties;
  width?: number;
  cardNumber?: number;
}

function TarotFront({
  imageSrc,
  onClick,
  style,
  width,
  cardNumber,
}: TarotFrontProps) {
  const StyledTarotCard = styled("img")(({ theme }) => ({
    borderRadius: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    width: width,
  }));

  return <StyledTarotCard onClick={onClick} style={style} src={imageSrc} />;
}

export default TarotFront;
