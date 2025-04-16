import { Text } from "@inubekit/inubekit";
import { noResults } from "@config/businessUnit/noResults";
import { INoResultsMessage } from "@ptypes/selectBusinessUnits/INoResultsMessage";
import { StyledNoResults } from "./styles";

const NoResultsMessage = (props: INoResultsMessage) => {
  const { search } = props;
  return (
    <StyledNoResults>
      <Text size="medium">{noResults(search).title}</Text>
      <Text size="medium">{noResults(search).description}</Text>
    </StyledNoResults>
  );
};

export { NoResultsMessage };
