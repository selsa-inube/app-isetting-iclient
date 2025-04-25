import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { ComponentAppearance } from "@enum/appearances";
import { IRequestProcessModal, RequestProcessModal } from "..";

const meta: Meta<typeof RequestProcessModal> = {
  title: "modals/RequestProcessModal",
  component: RequestProcessModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRequestProcessModal> = (args) => {
  return (
    <>
      <RequestProcessModal {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  appearance: ComponentAppearance.SUCCESS,
  title: "Procesando solicitud",
  description:
    "Hemos recibido tu solicitud y se encuentra en proceso. Por favor, espera mientras la gestionamos.",
  requestSteps: [
    { name: "Solicitud radicada", status: "completed" },
    { name: "Agregando", status: "completed" },
    { name: "Destino agregado", status: "pending" },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  portalId: "portal",
  appearance: ComponentAppearance.DANGER,
  title: "Procesando solicitud",
  description:
    "Hemos recibido tu solicitud y se encuentra en proceso. Por favor, espera mientras la gestionamos.",
  requestSteps: [
    { name: "Solicitud radicada", status: "completed" },
    { name: "Evaluando requisitos", status: "completed" },
    { name: "Agregando", status: "error" },
    { name: "Destino agregado", status: "pending" },
  ],
};

export default meta;
