import { useMediaQuery, Stack, inube } from "@inubekit/inubekit";
import { IEntry } from "@ptypes/design/table/IEntry";
import { mediaQueryMobile } from "@config/environment";
import { IPaymentCycleCardGroup } from "@ptypes/design/IPaymentCycleCardGroup";
import { PaymentCycleCard } from "../paymentCycleCard";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";

const PaymentCycleCardGroup = (props: IPaymentCycleCardGroup) => {
  const { data, labelsPaymentCard } = props;
  const smallScreen = useMediaQuery(mediaQueryMobile);

  return (
    <BoxContainer
      width="100%"
      height="100%"
      direction="row"
      wrap="wrap"
      gap={smallScreen ? `${tokens.spacing.s075}` : `${tokens.spacing.s150}`}
      padding={tokens.spacing.s075}
      boxSizing="border-box"
      overflowY="auto"
      backgroundColor={inube.palette.neutral.N0}
    >
      {data.map((entry: IEntry, index) => (
        <Stack key={index}>
          <PaymentCycleCard
            data={entry}
            numberCard={index + 1}
            labels={labelsPaymentCard}
          />
        </Stack>
      ))}
    </BoxContainer>
  );
};

export { PaymentCycleCardGroup };
export type { IPaymentCycleCardGroup };
