import Menu from "../components/Menu";
import { styled } from "@mui/system";
import CatTile from "../components/CatTile";
import { useNavigate } from "react-router-dom";
import homepageImage from "/Art/titlePage.jpg";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import H2Title from "../components/StyledElements/H2Title";
import ParargraphText from "../components/StyledElements/ParagraphText";
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
  width: " 100%",
  height: 700,
  background: theme.palette.primary.main,
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "Center",
    height: 800,
  },
}));
const MainImage = styled("img")(({ theme }) => ({
  width: "50%",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
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
          <MainText>
            <H2Title style={{ textShadow: " 5px 5px #558ABB" }}>
              {" "}
              Welcome to Considerate Cat!
            </H2Title>
            <ParargraphText>
              Hold onto your whiskers as we work our{" "}
              <b>
                <i style={{ color: "yellow" }}>magic</i>
              </b>{" "}
              ! This site is under cat-struction.
            </ParargraphText>
          </MainText>
        </MainContainer>
        <CatContainer>{Tiles}</CatContainer>
      </PageContainer>
    </ThemeProvider>
  );
};
