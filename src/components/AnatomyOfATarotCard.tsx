import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import TarotCardProps from "../types/Tarot.type";
import TarotFront from "./TarotFront";
import AnimatedCircle from "./AnimatedComponents/AnimatedCircleWithTooltip";
import WordBubble1 from "/Art/WordBubble1.png";
import WordBubblePink from "/Art/WordBubblePink.png";
import WordBubbleBlue from "/Art/WordBubbleBlue.png";
import WordBubbleGreen from "/Art/WordBubbleGreen.png";
import { Typography } from "@mui/material";
import { useReducer } from "react";
import Button from "./Button";

const PageContainer = styled("div")(({}) => ({
  minHeight: "100vh",
  minWidth: "100vh",
  backgroundColor: "#ebe3da",
}));

const Container = styled("div")({
  position: "relative",
  margin: "auto",
  width: 600,
  display: "flex",
  justifyContent: "center",
});

const AnatomyOfATarotCard = () => {
  interface State {
    showHide1: boolean;
    showHide2: boolean;
    showHide3: boolean;
    showHide4: boolean;
  }

  type Action =
    | { type: "SET_SHOW_HIDE_1" }
    | { type: "SET_SHOW_HIDE_2" }
    | { type: "SET_SHOW_HIDE_3" }
    | { type: "SET_SHOW_HIDE_4" };

  const initialState = {
    showHide1: false,
    showHide2: false,
    showHide3: false,
    showHide4: false,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SET_SHOW_HIDE_1":
        return { ...state, showHide1: !state.showHide1 };
      case "SET_SHOW_HIDE_2":
        return { ...state, showHide2: !state.showHide2 };
      case "SET_SHOW_HIDE_3":
        return { ...state, showHide3: !state.showHide3 };
      case "SET_SHOW_HIDE_4":
        return { ...state, showHide4: !state.showHide4 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = useTheme();
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const displayAllToolTips = () => {
    dispatch({ type: "SET_SHOW_HIDE_1" });
    dispatch({ type: "SET_SHOW_HIDE_2" });
    dispatch({ type: "SET_SHOW_HIDE_3" });
    dispatch({ type: "SET_SHOW_HIDE_4" });
  };

  return (
    <>
      <PageContainer>
        <Typography
          pr="10px"
          variant="h3"
          textAlign="center"
          fontStyle="italic"
          color="pink"
          fontFamily={theme.typography.h1.fontFamily}
          fontWeight="bold"
          fontSize="70px"
          sx={{ textShadow: "4px 2px #d6859b" }}
        >
          Anatomy Of
        </Typography>
        <Typography
          pb="30px"
          variant="h3"
          textAlign="center"
          fontStyle="italic"
          color="pink"
          fontFamily={theme.typography.h1.fontFamily}
          fontWeight="bold"
          fontSize="70px"
          lineHeight=".5"
          pl="46px"
          sx={{ textShadow: "4px 2px #d6859b" }}
        >
          A Tarot Card
        </Typography>
        <Typography
          maxWidth="1000px"
          margin="auto"
          variant="h6"
          textAlign="center"
          fontFamily={theme.typography.h1.fontFamily}
          fontStyle="italic"
          pb="20px"
        >
          Every tarot card is unique and different from one another but they
          share qualites among one another that can make it easier to learn how
          to read them. One thing is for sure, with this deck you will always
          find at least one cat one very card!
        </Typography>
        <Button
          style={{ margin: "auto", marginBottom: 30 }}
          buttonName="Display All Details"
          onClick={() => displayAllToolTips()}
        ></Button>
        <Container>
          <TarotFront
            style={{ transform: "rotate(0.02turn)" }}
            width={350}
            imageSrc={"/artwork/25.jpg"}
          />

          <AnimatedCircle
            showHide={state.showHide1}
            hover={() => dispatch({ type: "SET_SHOW_HIDE_1" })}
            imageSrc={WordBubblePink}
            ToolTipText={
              "You wont have to look too hard to find a cat on this deck."
            }
            toolTipRight={-57}
            toolTipTop={-76}
            textTop={20}
            textRight={-34}
            style={{ top: 109, right: 193 }}
          />
          <AnimatedCircle
            hover={() => dispatch({ type: "SET_SHOW_HIDE_2" })}
            showHide={state.showHide2}
            imageSrc={WordBubbleGreen}
            style={{ top: 229, right: 145 }}
            ToolTipText={
              "Minor Arcana symbolism will always be present. Here you can see three wine glasses for 'The three of cups'"
            }
            toolTipRight={-125}
            toolTipTop={115}
            textTop={189}
            textRight={-103}
          />
          <AnimatedCircle
            hover={() => dispatch({ type: "SET_SHOW_HIDE_3" })}
            imageSrc={WordBubbleBlue}
            style={{ top: 371, right: 138 }}
            toolTipRight={-125}
            showHide={state.showHide3}
            toolTipTop={307}
            textTop={384}
            textRight={-98}
            ToolTipText={
              "Every card will be full of symbolism. This card is about family, tradition and celebrations; represented by a waffle breakfast"
            }
          />

          <AnimatedCircle
            showHide={state.showHide4}
            hover={() => dispatch({ type: "SET_SHOW_HIDE_4" })}
            imageSrc={WordBubble1}
            ToolTipText={
              "Here is the title of the card that will allow you to look up and reference each card."
            }
            style={{ top: 538, right: 408 }}
            toolTipRight={439}
            toolTipTop={349}
            textTop={447}
            textRight={481}
          />
        </Container>
      </PageContainer>
    </>
  );
};

export default AnatomyOfATarotCard;
