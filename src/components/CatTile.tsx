import "@fontsource/merriweather";
import { styled } from "@mui/system";

interface PROPS {
  image: string;
  color: string;
  title: string;
  navigation: any;
}
const CatTile = ({ image, color, title, navigation }: PROPS) => {
  const StyledTile = styled("button")({
    display: "flex",
    width: "250px",
    height: "250px",
    backgroundColor: "pink",
    borderRadius: "10px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    alignItems: "flex-end",
  });

  const BottomTile = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "100%",
    backgroundColor: color,
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
  });

  return (
    <StyledTile onClick={navigation}>
      <BottomTile>{title}</BottomTile>
    </StyledTile>
  );
};

export default CatTile;
