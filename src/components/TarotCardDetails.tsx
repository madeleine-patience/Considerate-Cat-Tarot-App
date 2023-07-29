import { useState } from "react";
import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import TarotCardProps from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";

import { styled } from "@mui/system";

const ModalContainer = styled("div")(({ theme }) => ({
  width: "700px",
  height: "700px",
}));
const StyledPurrlaroide = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "lightYellow",
  textAlign: "left",
  padding: "30px",
  borderRadius: "30px",
  gap: "20px",
});
export const H2Title = styled("h2")({
  fontSize: "35px",
});
const SuitText = styled("h2")({
  fontSize: "24px",
});
const KeywordsText = styled("p")({
  fontSize: "20px",
});
const TarotImg = styled("img")({
  width: "300px",
});

const RightContainer = styled("div")({});
const CatContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "flex-start",
  flexWrap: "wrap",
});
const CatImages = styled("img")({
  width: "100px",
  height: "100px",
  overflow: "cover",
  borderRadius: "10px",
});

const MainContent = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});



function TarotCard(props: TarotCardProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  function catLookup(image: any) {
    const findTheCat = catData.cats.find((cat) => cat.image === image);
    handleShowCatInfo(findTheCat);
  }

  return (
    <ModalContainer>
      {!showCatInfo && (
        <StyledPurrlaroide>
          <div>
            <H2Title>{props.data.cardName}</H2Title>
            <SuitText>Suit: {props.data.suit} </SuitText>
            <KeywordsText>
              Keywords: {props.data.keyWords.join(", ")}
            </KeywordsText>
          </div>
          <MainContent>
            <TarotImg src={props.data.imageFileName} />
            <RightContainer>
              <div>
                <p>{props.data.description}</p>
                {props.data.catImage && <p>Cats Present: </p>}
                <CatContainer>
                  {props.data.catImage &&
                    props.data.catImage.map((image: string) => (
                      <button style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover"
                        }}>
                        <CatImages
                          key={uuidv4()}
                          onClick={(event) => {
                            catLookup(image);
                          }}
                        ></CatImages>
                      </button>
                    ))}
                </CatContainer>
              </div>
            </RightContainer>
          </MainContent>
        </StyledPurrlaroide>
      )}
      {showCatInfo && <SelectedCatInfo data={catData.cats[selectedCatId]} />}
    </ModalContainer>
  );
}

export default TarotCard;
