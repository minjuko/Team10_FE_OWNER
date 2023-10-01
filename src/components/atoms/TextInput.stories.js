import React from "react";
import { TextInput } from "./TextInput";

export default {
  title: "Atom/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: "alone",
    placeholder: { control: "text" },
  },
};

export const MainTextInput = {
  args: {
    placeholder: { control: "text" },
    type: "text",
  },
};

export const WithButtonInput = {
  args: {
    placeholder: { control: "text" },
    type: "text",
  },
};
