import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import TarotCardProps from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import CatButton from "./StyledElements/CatButton";

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
  fontSize: "40px",
  fontFamily: "Raleway",
});

const TitleTextContainer = styled("h2")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
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
  gap: "15px",
  flexDirection: "column",
});
const CatContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  justifyContent: "flex-start",
  flexWrap: "wrap",
});

const MainContent = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

function TarotCard({ data }: TarotCardProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  function catLookup(image: string[]) {
    const findTheCat = catData.cats.find((cat) => cat.image === image);
    handleShowCatInfo(findTheCat);
  }
  return (
    <ModalContainer>
      {!showCatInfo && (
        <StyledPurrlaroide>
          <TitleTextContainer>
            <H2Title>{data.cardName}</H2Title>
            <SuitText>Suit: {data.suit} </SuitText>
            <KeywordsText>Keywords: {data.keyWords.join(", ")}</KeywordsText>
          </TitleTextContainer>
          <MainContent>
            <TarotImg src={data.imageFileName} />
            <RightContainer>
              <p>{data.description}</p>
              {data.catImage && <p>Cats Present: </p>}
              <CatContainer>
                {data.catImage &&
                  data.catImage.map((image: string, index: number) => (
                    <CatButton
                      image={image}
                      catLookup={catLookup}
                      key={image + index}
                    />
                  ))}
              </CatContainer>
            </RightContainer>
          </MainContent>
        </StyledPurrlaroide>
      )}
      {showCatInfo && <SelectedCatInfo data={catData.cats[selectedCatId]} />}
    </ModalContainer>
  );
}

export default TarotCard;
