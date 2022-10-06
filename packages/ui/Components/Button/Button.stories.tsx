import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "With Icon",
  icon: <AiFillPlusCircle className="h-4 w-4 text-white" />,
  padding: "px-6 py-1",
  disable: false,
  colors: "bg-blue-500 text-white",
  margin: "",
  className: "",
  type: "button",
  href: null,
  children: null,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  text: "Without Icon",
  icon: null,
  padding: "px-10 py-1",
  disable: false,
  colors: "bg-blue-500 text-white",
  margin: "",
  className: "",
  type: "button",
  href: null,
  children: null,
};
export const WithHref = Template.bind({});
WithHref.args = {
  text: "Click Me",
  icon: null,
  padding: "px-10 py-1",
  disable: false,
  colors: "bg-blue-500 text-white",
  margin: "",
  className: "w-1/4",
  type: "button",
  href: "https://dewan-dev.vercel.app/en/auth/login",
  children: null,
};
