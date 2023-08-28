import { styled } from "@mui/system";
import { CSSProperties } from "react";
import Tooltip from "@mui/material/Tooltip";
import data from "../data/tarotCardData";

function TarotFront({
  imageSrc,
  onClick,
  style,
  width,
  displayToolTip,
  cardNumber,
}: {
  imageSrc: string;
  onClick?: () => void;
  style?: CSSProperties;
  width: number;
  displayToolTip?: boolean;
  cardNumber: number;
}) {
  const CustomTooltip = styled(Tooltip)(({ theme }) => ({
    backgroundColor: "pink", // Set pink background color
    fontWeight: "bold", // Set bold font weight
    fontSize: 18, // You can adjust the font size as needed
  }));

  const StyledTarotCard = styled("img")(({ theme }) => ({
    borderRadius: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    width: width,
  }));

  if (displayToolTip) {
    return (
      <CustomTooltip
        sx={{ fontSize: 50 }}
        title={data.tarotDeck[cardNumber].description}
      >
        <StyledTarotCard onClick={onClick} style={style} src={imageSrc} />
      </CustomTooltip>
    );
  }

  return <StyledTarotCard onClick={onClick} style={style} src={imageSrc} />;
}

export default TarotFront;
