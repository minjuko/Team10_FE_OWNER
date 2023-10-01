import React from "react";
import TextboxWithButton from "./TextboxWithButton";

export default {
  title: "molecules/TextboxWithButton",
  component: TextboxWithButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: "text",
    placeholder: { control: "text" },
  },
};

export const MainTextWithButton = {
  args: {
    type: "email",
    buttonlabel: "주소찾기",
    placeholder: { control: "text" },
  },
};
