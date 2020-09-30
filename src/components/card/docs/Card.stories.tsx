import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GlobalStyle } from "styles";

import Card from "../index";
import { CardProps } from "../types";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <>
    <GlobalStyle />
    <Card {...args}>Hello</Card>
  </>
);

export const DefaultCard = Template.bind({});
