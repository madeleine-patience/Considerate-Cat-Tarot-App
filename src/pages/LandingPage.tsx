import Menu from "../components/Menu";
import { styled } from "@mui/system";
import CatTile from "../components/CatTile";
import { useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { TwoCardsStyled } from "../components/TwoCardsStyled";
import FlowerFooter from "../components/FlowerFooter";

const PageContainer = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flexStart",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#e8d3dc",
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
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    objectFit: "cover",
    paddingRight: 0,
    background: "green",
  },
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
      color: "#d498a7",
      color2: "#f2cbd5",
      title: "View All Cards",
      navigation: () => navigateToCards(),
    },
    {
      image: "/Art/Abe.jpg",
      color: "#e6dca1",
      color2: "#f2eed0",
      title: "Get A Tarot Read",
      navigation: () => navigateToRead(),
    },
    {
      image: "/Art/Elm.jpg",
      color: "#8eabbd",
      color2: "#bfd5e3",
      title: "Meet The Cats",
      navigation: () => navigateToCats(),
    },
    {
      image: "/Art/Heidi.jpg",
      color: "#af99bf",
      color2: "#dbc5eb",
      title: "Read Horoscope",
      navigation: () => navigateToHoroscope(),
    },
  ];

  const Tiles = CatTileInfo.map((cats) => {
    return (
      <CatTile
        image={cats.image}
        color={cats.color}
        color2={cats.color2}
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
        <div style={{ display: "flex", width: "100vw" }}>
          {" "}
          <FlowerFooter />
        </div>
      </PageContainer>
    </ThemeProvider>
  );
};
