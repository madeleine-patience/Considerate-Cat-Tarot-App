import { Meta } from "@storybook/react";
import TarotInfoCard from "../components/TarotInfoCard";
import TarotCardProps from "../types/Tarot.type";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";
import tarotCardData from "../data/tarotCardData";

export default {
  title: "Components/TarotInfoCard",
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

// const CatInfoWithLongText: StoryType = Template.bind({});
// CatInfoWithLongText.args = {
//   ...Default.args,
//   data: {
//     ...Default.args.data,
//     description: data.cats[20].description,
//   },
//   displayName: false,
// };

// export { CatInfoWithLongText };
