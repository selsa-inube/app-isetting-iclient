import { MdInfoOutline } from "react-icons/md";
import {
  Stack,
  Icon,
  useMediaQuery,
  Input,
  Select,
  Label,
  Grid,
} from "@inubekit/inubekit";

import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/getFieldState";
import { IAddCycleModal } from "@ptypes/design/IAddCycleModal";
import { addCycleLabels } from "@config/payrollAgreement/payrollAgreementTab/generic/addCycleLabels";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { StyledSelectConatiner } from "./styles";

const AddCycleModal = (props: IAddCycleModal) => {
  const {
    actionText,
    comparisonData,
    formik,
    isLoading,
    portalId,
    title,
    isOrdinary,
    isExtraordinary,
    periodicityOptions,
    paydayOptions,
    typePaymentOptions,
    monthOptions,
    dayOptions,
    numberDaysUntilCutOptions,
    onCloseModal,
    onClick,
    onChange,
    onToggleInfoModal,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <ModalWrapper
      width={isMobile ? "335px" : "450px"}
      minHeight={isMobile ? "auto" : "480px"}
      isMobile={isMobile}
      labelActionButton={actionText}
      labelCloseModal="Cerrar"
      portalId={portalId}
      title={title}
      onClick={onClick}
      onCloseModal={onCloseModal}
      isLoading={isLoading}
      disabledActionButton={comparisonData || !formik.isValid}
    >
      <Stack gap={tokens.spacing.s200} direction="column" width="100%">
        <Input
          name="nameCycle"
          id="nameCycle"
          label={addCycleLabels.nameCycle}
          placeholder={addCycleLabels.placeholderNameCycle}
          type="text"
          size="compact"
          value={formik.values.nameCycle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          status={getFieldState(formik, "nameCycle")}
          message={formik.errors.nameCycle}
          fullwidth
        />
        {isOrdinary && (
          <>
            <Select
              id="periodicity"
              name="periodicity"
              label={addCycleLabels.periodicity}
              placeholder={addCycleLabels.placeholderPeriodicity}
              onChange={onChange}
              options={periodicityOptions ?? []}
              size="compact"
              value={formik.values.periodicity ?? ""}
              fullwidth
              message={formik.errors.periodicity}
              invalid={formik.errors.periodicity ? true : false}
            />
            <Stack direction="column">
              <Stack
                alignItems="center"
                gap={tokens.spacing.s050}
                margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
              >
                <Label htmlFor="payday" size="small">
                  {addCycleLabels.payday}
                </Label>
                <Icon
                  icon={<MdInfoOutline />}
                  appearance={ComponentAppearance.PRIMARY}
                  onClick={onToggleInfoModal}
                  size="12px"
                  cursorHover
                />
              </Stack>
              <Select
                id="payday"
                name="payday"
                placeholder={addCycleLabels.placeholderPayday}
                onChange={onChange}
                options={paydayOptions ?? []}
                disabled={!formik.values.periodicity}
                size="compact"
                value={formik.values.payday ?? ""}
                fullwidth
                message={formik.errors.payday}
                invalid={formik.errors.payday ? true : false}
              />
            </Stack>
          </>
        )}

        {isExtraordinary && (
          <>
            <Select
              id="typePayment"
              name="typePayment"
              label={addCycleLabels.typePayment}
              placeholder={addCycleLabels.placeholderTypePayment}
              onChange={onChange}
              options={typePaymentOptions ?? []}
              size="compact"
              value={formik.values.typePayment ?? ""}
              fullwidth
              message={formik.errors.typePayment}
              invalid={formik.errors.typePayment ? true : false}
            />
            <Stack direction="column" width="100%">
              <Stack
                margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
              >
                <Label htmlFor="month" size="small">
                  {addCycleLabels.payday}
                </Label>
              </Stack>
              <Grid
                gap={tokens.spacing.s075}
                templateColumns={`repeat(${isMobile ? 1 : 2}, 1fr)`}
                autoRows="auto"
                width="100%"
              >
                <StyledSelectConatiner>
                  <Select
                    id="month"
                    name="month"
                    placeholder={addCycleLabels.placeholderMonth}
                    onChange={onChange}
                    options={monthOptions ?? []}
                    size="compact"
                    fullwidth
                    value={formik.values.month ?? ""}
                    message={formik.errors.month}
                    invalid={formik.errors.month ? true : false}
                  />
                </StyledSelectConatiner>
                <StyledSelectConatiner>
                  <Select
                    id="day"
                    name="day"
                    placeholder={addCycleLabels.placeholderDay}
                    onChange={onChange}
                    options={dayOptions ?? []}
                    size="compact"
                    fullwidth
                    disabled={!formik.values.month}
                    value={formik.values.day ?? ""}
                    message={formik.errors.day}
                    invalid={formik.errors.day ? true : false}
                  />
                </StyledSelectConatiner>
              </Grid>
            </Stack>
          </>
        )}

        <Select
          id="numberDaysUntilCut"
          name="numberDaysUntilCut"
          label={addCycleLabels.numberDaysUntilCut}
          placeholder={addCycleLabels.placeholderNumberDaysUntilCut}
          onChange={onChange}
          options={numberDaysUntilCutOptions}
          size="compact"
          value={formik.values.numberDaysUntilCut ?? ""}
          fullwidth
          message={formik.errors.numberDaysUntilCut}
          disabled={formik.values.periodicity && !formik.values.periodicity}
          invalid={formik.errors.numberDaysUntilCut ? true : false}
        />
      </Stack>
    </ModalWrapper>
  );
};

export { AddCycleModal };
