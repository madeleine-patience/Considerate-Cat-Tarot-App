import { useState } from "react";
import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import { TarotCardProps } from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";

import { styled } from "@mui/system";

const ModalContainer = styled("div")(({ theme }) => ({
  width: "650px",
}));
const StyledPurrlaroide = styled("div")({
  display:"flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "lightYellow",
  textAlign: "left",
  padding: "30px",
  borderRadius: "30px",
  gap:"20px"
});
const TitleText = styled("h1")({
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

const RightContainer = styled("div")({
  display: "flex",
  padding: "15px",
});
const CatContainer = styled("div")({ display: "flex", gap: "10px" });
const CatImages = styled("img")({
  width: "100px",
  borderRadius: "10px",
  margin: "10px 0",
});

const MainContent = styled("div")({
  display: "flex",
  alignItems: "center",
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
          <TitleText>{props.data.cardName}</TitleText>
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
                      <CatImages
                        key={uuidv4()}
                        onClick={(event) => {
                          catLookup(image);
                        }}
                        src={image}
                      ></CatImages>
                    ))}
                </CatContainer>
              </div>
            </RightContainer>
          </MainContent>
        </StyledPurrlaroide>
      )}
      {showCatInfo && (
        <div>{<SelectedCatInfo data={catData.cats[selectedCatId]} />}</div>
      )}
    </ModalContainer>
  );
}

export default TarotCard;
