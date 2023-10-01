import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atom/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Long = {
  args: {
    type: "long",
    label: "시작하기",
  },
};

export const Small = {
  args: {
    type: "small",
    label: "주소 찾기",
  },
};

export const AddPhoto = {
  args: {
    type: "addPhoto",
    label: "+",
  },
};

export const withTextInput = {
  args: {
    type: "withTextInput",
    label: "주소찾기",
  },
};
