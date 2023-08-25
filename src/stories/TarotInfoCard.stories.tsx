import { Meta } from "@storybook/react";
import TarotInfoCard from "../components/TarotInfoCard";
import TarotCardProps from "../types/Tarot.type";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";
import tarotCardData from "../data/tarotCardData";

export default {
  title: "Components/TarotCardDetails",
  component: TarotInfoCard,
} as Meta;

const Template = (args: TarotCardProps) => (
  <ThemeProvider theme={theme}>
    <TarotInfoCard {...args} />
  </ThemeProvider>
);

type StoryType = typeof Template & { args?: Partial<TarotCardProps> };

const BasicTarotCard: StoryType = Template.bind({});
BasicTarotCard.args = { ...tarotCardData.tarotDeck[3] };

export { BasicTarotCard };

const CatWithBuds: StoryType = Template.bind({});
CatWithBuds.args = {
  ...tarotCardData.tarotDeck[5],
};

export { CatWithBuds };

const CatWithManyBuds: StoryType = Template.bind({});
CatWithManyBuds.args = {
  ...tarotCardData.tarotDeck[12],
};

export { CatWithManyBuds };
