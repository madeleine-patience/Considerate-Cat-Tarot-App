import Menu from "../components/Menu";
import { styled } from "@mui/system";
import CatTile from "../components/CatTile";
import { useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { TwoCardsStyled } from "../components/TwoCardsStyled";

const PageContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
const CatContainer = styled("div")(({ theme }) => ({
  padding: 25,
  display: "grid",
  gridTemplateColumns: "auto auto auto auto ",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "auto auto  ",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "auto   ",
  },
}));

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  margin: 20,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "Center",
  },
}));

const CardContainer = styled("div")(({ theme }) => ({
  paddingTop: 100,
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const MainImage = styled("img")(({ theme }) => ({
  height: 600,
  borderRadius: 20,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    objectFit: "cover",
    paddingRight: 0,
    background: "green",
  },
}));

const MainText = styled("div")(({ theme }) => ({
  width: 650,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 25,
}));

export const LandingPage = () => {
  const navigate = useNavigate();
  const navigateToCards = () => {
    navigate("/Deck");
  };
  const navigateToRead = () => {
    navigate("/TarotRead");
  };
  const navigateToCats = () => {
    navigate("/CatCatalogue");
  };
  const navigateToHoroscope = () => {
    navigate("/Horoscope");
  };
  const CatTileInfo = [
    {
      image: "/Art/Heidi.jpg",
      color: "pink",
      title: "View All Cards",
      navigation: () => navigateToCards(),
    },
    {
      image: "/Art/Abe.jpg",
      color: "lightYellow",
      title: "Get A Tarot Read",
      navigation: () => navigateToRead(),
    },
    {
      image: "/Art/Elm.jpg",
      color: "PowderBlue",
      title: "Meet The Cats",
      navigation: () => navigateToCats(),
    },
    {
      image: "/Art/Heidi.jpg",
      color: "Thistle",
      title: "Read Horoscope",
      navigation: () => navigateToHoroscope(),
    },
  ];

  const Tiles = CatTileInfo.map((cats) => {
    return (
      <CatTile
        image={cats.image}
        color={cats.color}
        title={cats.title}
        navigation={cats.navigation}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <PageContainer>
        <MainContainer>
          <MainImage src={homepageImage} />
          <CardContainer>
            <TwoCardsStyled
              amountOfCards={3}
              selectedCard={[12, 1, 23, 2, 55, 62, 44]}
            />
          </CardContainer>
        </MainContainer>

        <CatContainer>{Tiles}</CatContainer>
      </PageContainer>
    </ThemeProvider>
  );
};
