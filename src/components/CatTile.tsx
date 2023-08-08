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
    borderRadius: "10px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    alignItems: "flex-end",
    transition: "all 340ms",
    border: "1px solid #adadad",
    perspective: "1000px",
    "&:hover div": {
      transform: "rotate3d(1, 1, 1, -10deg)",
      padding: "50px",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    }
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
    transition: "all 140ms"
  });

  return (
    <StyledTile onClick={navigation}>
      <BottomTile>{title}</BottomTile>
    </StyledTile>
  );
};

export default CatTile;
