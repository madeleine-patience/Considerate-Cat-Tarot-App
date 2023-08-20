import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import { styled } from "@mui/system";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import H2Title from "./StyledElements/H2Title";
import Purrlaroid from "./Purrlaroid";

const ModalContainer = styled("div")({
  backgroundColor: "#9bba99",
  display: "flex",
  flexDirection: "column",
  width: 700,
  height: 700,
  padding: 25,
  borderRadius: 10,
  gap: "15px",
  border: "2px solid white",
});

const MainContent = styled("div")({
  display: "flex",
  gap: 50,
  alignItems: "center",
});
// First section of Container
const MainCatContainer = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  width: "50%",
});

const TextContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "15px",
  width: "50%",
  height: "100%",
  fontFamily: theme.typography.h2.fontFamily,
});

const DescriptionParagraph = styled("p")({
  width: "100%",
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
});

const BuddyImage = styled("img")({
  width: "100px",
  borderRadius: "10px",
});

function SelectedCat({ data }: ICatProps) {
  const buddyLinks = data.buddyIds;
  return (
    <ThemeProvider theme={theme}>
      <ModalContainer>
        <H2Title style={{ textShadow: " 5px 5px grey" }}>{data.name}</H2Title>
        <MainContent>
          <Purrlaroid data={data} />
          <TextContainer>
            <DescriptionParagraph> {data.description}</DescriptionParagraph>
          </TextContainer>
        </MainContent>
        <BuddyContainer>
          {data.buddyIds && <h3> {data.name}'s Friends:</h3>}
          {data.buddyIds &&
            data.buddyIds.map((buddyNumber) => (
              <>
                <Purrlaroid
                  key={"hi"}
                  data={catData.cats[buddyNumber]}
                  style={{ height: 125, width: 125 }}
                ></Purrlaroid>
              </>
            ))}
        </BuddyContainer>
      </ModalContainer>
    </ThemeProvider>
  );
}

export default SelectedCat;
