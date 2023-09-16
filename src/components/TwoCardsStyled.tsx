import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import TarotFront from "../components/TarotFront";
import data from "../data/tarotCardData";

const CardSpreadContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: 300,
}));

export interface Cards {
  amountOfCards: number;
  selectedCard: number[];
  style?: any;
}

export const TwoCardsStyled = ({
  amountOfCards,
  selectedCard,
  style,
}: Cards) => {
  let styles = [
    {
      transform: "rotate(-0.05turn)",
      top: -40,
      right: 100,
      selectedCard: selectedCard[1],
    },
    {
      transform: "rotate(0.03turn)",
      top: -30,
      left: 0,
      selectedCard: selectedCard[2],
    },
    {
      transform: "rotate(-0.05turn)",
      top: -50,
      right: 0,
      selectedCard: selectedCard[3],
    },
    {
      transform: "rotate(-0.04turn)",
      top: 0,
      right: 300,
      selectedCard: selectedCard[4],
    },
    {
      transform: "rotate(0.04turn)",
      top: 0,
      right: 100,
      selectedCard: selectedCard[5],
    },
    {
      transform: "rotate(-0.0turn)",
      top: 0,
      right: 200,
      selectedCard: selectedCard[6],
    },
  ];

  styles = styles.slice(-amountOfCards);

  const mappedCardLayout = styles.map((card) => {
    return (
      <TarotFront
        width={200}
        imageSrc={data.tarotDeck[card.selectedCard].imageFileName}
        style={{
          transform: card.transform,
          position: "absolute",
          top: card.top,
          right: card.right,
        }}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <CardSpreadContainer>{mappedCardLayout}</CardSpreadContainer>
    </ThemeProvider>
  );
};
