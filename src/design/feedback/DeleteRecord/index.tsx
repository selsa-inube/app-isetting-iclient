import { MdDeleteOutline } from "react-icons/md";
import { Icon, Text, useMediaQuery } from "@inubekit/inubekit";

import { ComponentAppearance } from "@enum/appearances";
import { DecisionModal } from "@design/modals/decisionModal";
import { IDeleteRecord } from "@ptypes/design/IDeleteRecord";
import { actionsTable } from "@config/actionsTable";
import { StyledContainerIcon } from "./styles";

const DeleteRecord = (props: IDeleteRecord) => {
  const { showModal, messageDelete, loading, onToggleModal, onClick } = props;

  const screenTablet = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <StyledContainerIcon onClick={onToggleModal} $isTablet={screenTablet}>
        <Icon
          appearance={ComponentAppearance.DANGER}
          icon={<MdDeleteOutline />}
          size="16px"
          onClick={onToggleModal}
          cursorHover
          spacing="narrow"
        />
        {screenTablet && (
          <Text type="body" size="medium">
            {actionsTable.delete}
          </Text>
        )}
      </StyledContainerIcon>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={messageDelete.title}
          actionText={messageDelete.actionText}
          description={messageDelete.description}
          onClick={onClick}
          onCloseModal={onToggleModal}
          appearance={ComponentAppearance.DANGER}
          isLoading={loading}
        />
      )}
    </>
  );
};

export { DeleteRecord };
