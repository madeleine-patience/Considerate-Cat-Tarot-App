import React, { useState } from "react";
import data from "../data/tarotCardData";
import { styled } from "@mui/system";

interface CardFlipProps {
  imageSrc: string;
  onClick?: () => void;
  cardProps?: React.ComponentProps<typeof Card>;
}
interface CardProps {
  isFlipped?: boolean;
  transitionDelay?: string;
}

const Card = styled("div")(
  ({ isFlipped = false, transitionDelay }: CardProps) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 600ms",
    transitionDelay: transitionDelay,
    cursor: "pointer",
    height: 425,
    width: 250,
    margin: 10,
    transform: isFlipped
      ? "perspective(1000px) rotateY(180deg)"
      : "perspective(1000px) rotateY(0deg)",
  })
);
const TarotCard = styled("img")(({ theme }) => ({
  borderRadius: 20,
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  transformOrigin: "center center",
  width: "100%",
  height: "100%",
  position: "absolute",
  backfaceVisibility: "hidden",
}));

const TarotFront = styled(TarotCard)({
  transform: "rotateY(180deg)",
});

const TarotBack = styled(TarotCard)({});

function TarotCardWithFlip({ imageSrc, cardProps, onClick }: CardFlipProps) {
  return (
    <Card onClick={onClick} {...cardProps}>
      <TarotFront src={imageSrc} alt="Tarot Front" />
      <TarotBack src={data.tarotDeck[0].imageFileName} alt="Tarot Back" />
    </Card>
  );
}

export default TarotCardWithFlip;
