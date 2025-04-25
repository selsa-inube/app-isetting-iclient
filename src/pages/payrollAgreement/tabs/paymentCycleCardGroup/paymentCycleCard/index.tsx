import { MdCurrencyExchange } from "react-icons/md";
import {
  Divider,
  Icon,
  inube,
  Stack,
  Text,
  useMediaQuery,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { IPaymentCycleCard } from "@ptypes/design/IPaymentCycleCard";
import { BoxContainer } from "@design/layout/boxContainer";

const PaymentCycleCard = (props: IPaymentCycleCard) => {
  const { data, numberCard, labels } = props;
  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <BoxContainer
      direction="column"
      backgroundColor={inube.palette.neutral.N0}
      width={isMobile ? "200px" : "290px"}
      height="282px"
      borderRadius={tokens.spacing.s100}
      padding={tokens.spacing.s200}
      gap={isMobile ? `${tokens.spacing.s050}` : `${tokens.spacing.s150}`}
      boxSizing="border-box"
      boxShadow="2px 1px 6px 2px rgba(0, 0, 0, 0.15)"
    >
      <Stack gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s150}>
        <Icon
          icon={<MdCurrencyExchange />}
          appearance={ComponentAppearance.GRAY}
          size="24px"
        />
        <Text
          type="title"
          size="medium"
          appearance={ComponentAppearance.GRAY}
          weight="bold"
        >
          {`Ciclo de pago -${numberCard}`}
        </Text>
      </Stack>
      <Divider dashed />

      <Stack
        gap={tokens.spacing.s100}
        direction="column"
        justifyContent="center"
      >
        {labels.map(
          (field, id) =>
            data[field.id] && (
              <Stack key={id} direction="column" gap={tokens.spacing.s050}>
                <Text size="medium" type="label" weight="bold">
                  {field.titleName}
                </Text>
                <Text
                  size="large"
                  appearance={ComponentAppearance.GRAY}
                  ellipsis
                >
                  {data[field.id]}
                </Text>
              </Stack>
            ),
        )}
      </Stack>
    </BoxContainer>
  );
};

export { PaymentCycleCard };
export type { IPaymentCycleCard };
