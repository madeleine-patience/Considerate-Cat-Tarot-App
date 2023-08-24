import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import { styled } from "@mui/system";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import H2Title from "./StyledElements/H2Title";
import Purrlaroid from "./Purrlaroid";

const ModalContainer = styled("div")({
  backgroundColor: "#e8dfca",
  display: "flex",
  flexDirection: "column",
  padding: 25,
  gap: 15,
  border: "2px solid white",
  zIndex: 3,
});
const MainCatImage = styled("img")({
  display: "flex",
  width: 250,
  margin: "auto",
  padding: 20,
  background: "white",
});

const MainContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

const TextContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  height: "100%",
  fontFamily: theme.typography.h2.fontFamily,
  textAlign: "center",
});

const DescriptionParagraph = styled("p")({
  width: "100%",
  fontFamily: theme.typography.h1.fontFamily,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: 12,
  WebkitBoxOrient: "vertical",
});
// Second section of Container

const BuddyContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  fontSize: "20px",
  gap: "10px",
  alignItems: "center",
});

function SelectedCat({ data }: ICatProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalContainer>
        <MainContent>
          <H2Title
            style={{
              textAlign: "center",
              WebkitTextStroke: "1px #d47daf",
              color: "#686ba1",
            }}
          >
            {data.name}
          </H2Title>
          <MainCatImage src={data.image} />
          <TextContainer>
            <DescriptionParagraph> {data.description}</DescriptionParagraph>
          </TextContainer>
        </MainContent>
        {/* <BuddyContainer>
          {data.buddyIds && <h3> {data.name}'s Friends:</h3>}
          {data.buddyIds &&
            data.buddyIds.map((buddyNumber) => (
              <>
                <Purrlaroid
                  key={"hi"}
                  data={catData.cats[buddyNumber]}
                  imageSize={150}
                ></Purrlaroid>
              </>
            ))}
        </BuddyContainer> */}
      </ModalContainer>
    </ThemeProvider>
  );
}

export default SelectedCat;
