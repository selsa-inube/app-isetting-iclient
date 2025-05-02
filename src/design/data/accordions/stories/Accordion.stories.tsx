import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Grid } from "@inubekit/inubekit";

import { BoxAttribute } from "@design/feedback/boxAttributes";
import { IAccordion } from "@ptypes/design/IAccordion";
import { Accordion } from "..";

const meta: Meta<typeof Accordion> = {
  title: "data/Accordion",
  component: Accordion,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof Accordion>;

export const Default: Story = (args: IAccordion) => <Accordion {...args} />;
Default.args = {
  title: "Datos generales",
  children: (
    <Grid padding="16px" gap="8px">
      <BoxAttribute label="Label" value="Value" />
      <BoxAttribute label="Label" value="Value" />
    </Grid>
  ),
};

export default meta;
