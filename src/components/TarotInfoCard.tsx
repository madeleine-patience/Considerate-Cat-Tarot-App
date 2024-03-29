import SelectedCatInfo from "./CatInfoCard";
import catData from "../data/cats";
import TarotCardProps from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import CatButton from "./StyledElements/CatButton";
import { styled } from "@mui/system";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const ModalContainer = styled("div")(({ theme }) => ({
  width: 700,
  height: 700,
  borderRadius: 10,
}));
const FullModalContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#b4cfb0",
  textAlign: "left",
  border: "2px solid #d47daf",
  width: "100%",
  height: "100%",
});
const InnerModalContainer = styled("div")({
  backgroundColor: "#F7F7F7",
  width: "90%",
  height: "90%",
  margin: "auto",
  border: "4px solid #F7F7F7",
});

export const H2Title = styled("h2")({
  fontSize: 40,
  color: "black",
  backgroundColor: "#e8d3c5",
  padding: " 20px",
  fontWeight: 100,
  fontFamily: theme.typography.body1.fontFamily,
});

const SolidLine = styled("div")({
  borderBottom: "2px solid black",
});

const TitleTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SuitText = styled("h2")({
  fontFamily: theme.typography.h2.fontFamily,
  color: "black",
  fontSize: 24,
});
const KeywordsText = styled("p")({
  fontSize: "20px",
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: "bold",
  color: "black",
});
const KeyWordContainer = styled("div")({
  display: "flex",
  gap: 5,
  alignItems: "flex",
});

const CardDescriptionText = styled("p")({
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: 18,
  color: "black",
});
const TarotImg = styled("img")({
  height: 500,
});

const RightContainer = styled("div")({
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  width: "50%",
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
  gap: "15px",
  padding: theme.spacing(1),
});

const CatsPresentText = styled("p")({
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: 18,
  color: "black",
  fontWeight: "bold",
});
function TarotCard(data: TarotCardProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  const catLookup = (image: string) => {
    const findTheCat = catData.cats.find((cat) => cat.image === image);
    handleShowCatInfo(findTheCat);
  };
  const KeywordStyling = data.keyWords?.map((keyWord: string) => {
    return (
      <p
        key={keyWord}
        style={{
          background: "#e8d3c5",
          textAlign: "center",
          borderRadius: 10,
          padding: 5,
          fontSize: 18,
        }}
      >
        {keyWord}
      </p>
    );
  });
  let renderBuddyWidth = 0;
  if (data.catImage) {
    renderBuddyWidth = data.catImage.length > 4 ? 75 : 100;
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer>
        {!showCatInfo && (
          <FullModalContainer>
            <InnerModalContainer>
              <H2Title>{data.cardName}</H2Title>

              <TitleTextContainer></TitleTextContainer>
              <MainContent>
                <TarotImg src={data.imageFileName} />
                <RightContainer>
                  <KeywordsText>Keywords:</KeywordsText>

                  <KeyWordContainer>{KeywordStyling}</KeyWordContainer>
                  <SuitText>
                    {" "}
                    <b>Card Suit:</b> {data.suit}{" "}
                  </SuitText>
                  <CardDescriptionText>{data.description}</CardDescriptionText>
                  {data.catImage && (
                    <CatsPresentText>Cats Present: </CatsPresentText>
                  )}
                  <CatContainer>
                    {data.catImage &&
                      data.catImage.map((image: string, index: number) => (
                        <CatButton
                          width={renderBuddyWidth}
                          image={image}
                          catLookup={catLookup}
                          key={image + index}
                        />
                      ))}
                  </CatContainer>
                </RightContainer>
              </MainContent>
            </InnerModalContainer>
          </FullModalContainer>
        )}
        {showCatInfo && <SelectedCatInfo data={catData.cats[selectedCatId]} />}
      </ModalContainer>
    </ThemeProvider>
  );
}

export default TarotCard;
