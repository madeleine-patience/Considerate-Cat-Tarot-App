import { Meta } from "@storybook/react";
import Purrlaroid from "../components/Purrlaroid";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";

export default {
  title: "Components/Purrlaroid",
  component: Purrlaroid,
} as Meta;

const Template = (args: ICatProps) => (
  <ThemeProvider theme={theme}>
    <Purrlaroid {...args} />
  </ThemeProvider>
);

type StoryType = typeof Template & { args?: Partial<ICatProps> };

const Default: StoryType = Template.bind({});
Default.args = {
  data: {
    id: 1,
    name: "Eddie",
    description: "Abe The Babe",
    appearsOnCards: [1, 2, 3],
    image: "/Cats/Eddie.jpg",
  },
  handleClick: (data) => console.log(data.name),
  displayName: true,
  imageSize: 300,
};

export { Default };

const NoDisplayName: StoryType = Template.bind({});
NoDisplayName.args = {
  ...Default.args,
  width: 100,
  displayName: false,
};

export { NoDisplayName };

const SmallImage: StoryType = Template.bind({});
SmallImage.args = {
  ...Default.args,
  imageSize: 100,
  displayName: false,
};

export { SmallImage };
