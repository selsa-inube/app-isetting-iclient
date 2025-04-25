import { MdClear } from "react-icons/md";
import { Grid, Stack } from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { IActionsModal } from "@ptypes/design/IActionsModal";
import { StyledModal, StyledContentActions } from "./styles";

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
            <StyledContentActions
              key={index}
              onClick={(e) => e.stopPropagation()}
            >
              <div onClick={(e) => e.stopPropagation()}>
                {action.content(entry)}
              </div>
            </StyledContentActions>
          ))}
        </Stack>
        <MdClear cursor="pointer" onClick={onClose} />
      </Grid>
    </StyledModal>
  );
};

export type { IActionsModal };
export { ActionsModal };
