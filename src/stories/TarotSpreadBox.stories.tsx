import { Meta } from "@storybook/react";
import "../styles/reset.css";
import TarotSpreadBox from "../components/TarotSpreadBox";
import { ThemeProvider, useTheme } from "@mui/material/styles";

export default {
  title: "Components/TarotSpreadBox",
  component: TarotSpreadBox,
} as Meta;

const Template = (args: any) => <TarotSpreadBox {...args} />;

type StoryType = typeof Template & { args?: Partial<any> };
const Default: StoryType = Template.bind({});
Default.args = { title: "One Card Spread", width: 100 };
const BasicTarotCard: StoryType = Template.bind({});
BasicTarotCard.args = {};

export { Default };

const ThreeCards: StoryType = Template.bind({});
ThreeCards.args = {
  ...Default.args,
  backgroundColor: "lightGreen",

  amountOfCards: 3,
  width: 100,
};

export { ThreeCards };

const FiveCards: StoryType = Template.bind({});
FiveCards.args = {
  ...Default.args,
  amountOfCards: 5,
  width: 100,
  backgroundColor: "pink",
};

export { FiveCards };
