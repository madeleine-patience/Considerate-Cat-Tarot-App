import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import TarotCard from "./TarotInfoCard";
import TarotCardProps from "../types/Tarot.type";
import TarotFront from "./TarotFront";

const Keyframes = styled("div")({});
const Container = styled("div")(({ theme }) => ({}));
const Circle = styled("div")(({ theme }) => ({}));
const Elmer = styled("img")(({ theme }) => ({}));

const AnatomyOfATarotCard = (data: TarotCardProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <TarotFront {...data} />
    </ThemeProvider>
  );
};

export default AnatomyOfATarotCard;
