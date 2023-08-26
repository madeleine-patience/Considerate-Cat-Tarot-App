import { Meta } from "@storybook/react";
import ElmerIcon from "../components/ElmerIcon";
import ICatProps from "../types/CatProps";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "../styles/reset.css";

export default {
  title: "Components/ElmerIcon",
  component: ElmerIcon,
} as Meta;

const Template = (args: any) => (
  <ThemeProvider theme={theme}>
    <ElmerIcon {...args} />
  </ThemeProvider>
);

type StoryType = typeof Template & { args?: Partial<any> };

const Default: StoryType = Template.bind({});
Default.args = {};

export { Default };

// const NoDisplayName: StoryType = Template.bind({});
// NoDisplayName.args = {
//   ...Default.args,
//   displayName: false,
// };

// export { NoDisplayName };

// const SmallImage: StoryType = Template.bind({});
// SmallImage.args = {
//   ...Default.args,
//   imageSize: 100,
//   displayName: false,
// };

// export { SmallImage };
