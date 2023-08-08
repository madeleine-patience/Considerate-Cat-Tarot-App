import Menu from "../components/Menu";
import { styled } from "@mui/system";
import CatTile from "../components/CatTile";
import { useNavigate } from "react-router-dom";

const PageContainer = styled("div")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});
const CatContainer = styled("div")(({ theme }) => ({
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
    <>
      <Menu />
      <PageContainer>
        <CatContainer>{Tiles}</CatContainer>
      </PageContainer>
    </>
  );
};
