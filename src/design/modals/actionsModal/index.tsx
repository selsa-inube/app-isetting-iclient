import { MdClear } from "react-icons/md";
import { Grid, Icon, Stack } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IActionsModal } from "@ptypes/design/IActionsModal";
import { StyledModal, StyledContentActions } from "./styles";
import { ComponentAppearance } from "@enum/appearances";

const ActionsModal = (props: IActionsModal) => {
  const { actions, entry, onClose } = props;

  return (
    <StyledModal>
      <Grid
        templateColumns="auto 0.5fr"
        justifyItems="end"
        justifyContent="space-between"
        gap={tokens.spacing.s100}
      >
        <Stack direction="column" gap={tokens.spacing.s100}>
          {actions.map((action, index) => (
            <StyledContentActions key={index}>
              <div onClick={(e) => e.stopPropagation()}>
                {action.content(entry)}
              </div>
            </StyledContentActions>
          ))}
        </Stack>
        <Icon
          icon={<MdClear />}
          onClick={onClose}
          appearance={ComponentAppearance.PRIMARY}
          cursorHover
        />
      </Grid>
    </StyledModal>
  );
};

export { ActionsModal };
