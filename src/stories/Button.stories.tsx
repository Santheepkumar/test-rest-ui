import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GithubButton from "../components/Header/GithubButton";

export default {
  title: "Header/GithubButton",
  component: GithubButton,
} as ComponentMeta<typeof GithubButton>;

const Template: ComponentStory<typeof GithubButton> = (args) => (
  <GithubButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Open in Github",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
