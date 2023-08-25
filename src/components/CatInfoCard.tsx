import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import { styled } from "@mui/system";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import H2Title from "./StyledElements/H2Title";
import Purrlaroid from "./Purrlaroid";

const ModalContainer = styled("div")({
  backgroundColor: "#f0eed8",
  display: "flex",
  flexDirection: "column",
  padding: 25,
  gap: 15,
  border: "2px solid white",
});
const MainCatImage = styled("img")({
  position: "absolute",
  top: -50,
  left: "50%",
  transform: " translate( -50%)",
  display: "flex",
  borderRadius: "100%",
  width: 100,
  height: 100,
  objectFit: "cover",
  margin: "auto",
  padding: 10,
  background: "pink",
  border: "2px solid #686ba1",
});

const MainContent = styled("div")({
  paddingTop: 50,
  width: "100%",
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
  background: "white",
  borderRadius: 10,
  padding: 10,
  border: "2px solid pink",
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
        <MainCatImage src={data.image} />
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
