import SelectedCatInfo from "./SelectedCatinfo";
import catData from "../data/cats";
import TarotCardProps from "../types/Tarot.type";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import CatButton from "./StyledElements/CatButton";
import { styled } from "@mui/system";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const ModalContainer = styled("div")(({ theme }) => ({
  width: "700px",
  height: "700px",
  borderRadius: 10,
}));
const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  backgroundColor: "#dbb8d2",
  textAlign: "left",
  border: "2px solid #d47daf",
});

export const H2Title = styled("h2")({
  fontSize: 50,
  fontWeight: "bold",
  fontFamily: theme.typography.h1.fontFamily,
  color: "white",
  textShadow: " 5px 5px #d47daf",
  padding: `5px ${theme.spacing(1)} `,
});

const SolidLine = styled("div")({
  borderBottom: "2px solid #d47daf",
});

const TitleTextContainer = styled("h2")({
  display: "flex",
  flexDirection: "column",
});

const SuitText = styled("h2")({
  fontFamily: theme.typography.h2.fontFamily,
  color: "white",
  fontSize: 24,
  padding: `10px ${theme.spacing(1)} `,
});
const KeywordsText = styled("p")({
  fontSize: "20px",
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: "italic",
  fontWeight: "bold",
  color: "white",
  padding: `10px ${theme.spacing(1)} `,
  textShadow: " 2px 2px grey",
});
const KeyWordContainer = styled("p")({
  display: "flex",
  gap: 5,
  alignItems: "center",
});

const CardDescriptionText = styled("p")({
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: 18,
  color: "white",
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
  padding: theme.spacing(1),
});

const CatsPresentText = styled("p")({
  fontFamily: theme.typography.h2.fontFamily,
  fontSize: 18,
  color: "white",
  fontWeight: "bold",
});
function TarotCard({ data }: TarotCardProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();

  function catLookup(image: string) {
    const findTheCat = catData.cats.find((cat) => cat.image === image);
    handleShowCatInfo(findTheCat);
  }

  const KeywordStyling = data.keyWords.map((keyWord: string) => {
    return (
      <p
        style={{
          background: theme.palette.secondary.dark,
          textAlign: "center",
          borderRadius: 10,
          padding: 5,
        }}
      >
        {keyWord}
      </p>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <ModalContainer>
        {!showCatInfo && (
          <MainContainer>
            <TitleTextContainer>
              <H2Title>{data.cardName}</H2Title>
              <SolidLine />
              <KeyWordContainer>
                <KeywordsText>Keywords:</KeywordsText>
                {KeywordStyling}
              </KeyWordContainer>
              <SolidLine />
            </TitleTextContainer>
            <MainContent>
              <TarotImg src={data.imageFileName} />
              <RightContainer>
                <CardDescriptionText>{data.description}</CardDescriptionText>
                {data.catImage && (
                  <CatsPresentText>Cats Present: </CatsPresentText>
                )}
              </RightContainer>
            </MainContent>
          </MainContainer>
        )}
        {showCatInfo && <SelectedCatInfo data={catData.cats[selectedCatId]} />}
      </ModalContainer>
    </ThemeProvider>
  );
}

export default TarotCard;
