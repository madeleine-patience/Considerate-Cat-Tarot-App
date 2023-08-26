import { Meta } from "@storybook/react";
import { TwoCardsStyled } from "../components/TwoCardsStyled";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";

export default {
  title: "Components/TwoCardsStyled",
  component: TwoCardsStyled,
} as Meta;

const Template = (args: any) => (
  <ThemeProvider theme={theme}>
    <TwoCardsStyled {...args} />
  </ThemeProvider>
);

type StoryType = typeof Template & { args?: Partial<any> };
const Default: StoryType = Template.bind({});
Default.args = { selectedCard: [0, 1] };
const BasicTarotCard: StoryType = Template.bind({});
BasicTarotCard.args = {};

export { Default };
