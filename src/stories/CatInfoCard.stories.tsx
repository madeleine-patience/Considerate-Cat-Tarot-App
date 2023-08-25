import { Meta } from "@storybook/react";
import CatInfoCard from "../components/CatInfoCard";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";
import data from "../data/cats";

export default {
  title: "Components/CatInfoCard",
  component: CatInfoCard,
} as Meta;

const Template = (args: ICatProps) => (
  <ThemeProvider theme={theme}>
    <CatInfoCard {...args} />
  </ThemeProvider>
);

type StoryType = typeof Template & { args?: Partial<ICatProps> };

const Default: StoryType = Template.bind({});
Default.args = {
  data: {
    id: 1,
    name: data.cats[1].name,
    description: data.cats[1].description,
    appearsOnCards: data.cats[1].appearsOnCards,
    image: data.cats[1].image,
    buddyIds: data.cats[1].buddyIds,
  },
  handleClick: (data) => console.log(data.name),
  displayName: true,
  imageSize: 300,
};

export { Default };

const CatInfoWithLongText: StoryType = Template.bind({});
CatInfoWithLongText.args = {
  ...Default.args,
  data: {
    ...Default.args.data,
    description: data.cats[20].description,
  },
  displayName: false,
};

export { CatInfoWithLongText };

const SmallImage: StoryType = Template.bind({});
SmallImage.args = {
  ...Default.args,
  displayName: false,
};

export { SmallImage };
